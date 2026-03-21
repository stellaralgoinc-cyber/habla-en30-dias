import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { session_id: string; password: string };
    const { session_id, password } = body;

    if (!session_id || !password) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "La contraseña debe tener al menos 8 caracteres" }, { status: 400 });
    }

    // Verify Stripe session
    let stripeSession;
    try {
      stripeSession = await stripe.checkout.sessions.retrieve(session_id);
    } catch {
      return NextResponse.json({ error: "Sesión de pago inválida" }, { status: 400 });
    }

    if (stripeSession.payment_status !== "paid") {
      return NextResponse.json({ error: "El pago no fue completado" }, { status: 400 });
    }

    const email = stripeSession.customer_email ?? stripeSession.customer_details?.email;
    if (!email) {
      return NextResponse.json({ error: "No se encontró el correo en la sesión de pago" }, { status: 400 });
    }

    const customerId = typeof stripeSession.customer === "string" ? stripeSession.customer : null;
    const paymentIntent = typeof stripeSession.payment_intent === "string" ? stripeSession.payment_intent : null;

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    let userId: string;

    // Try to create the user first
    const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (createError) {
      // If user already exists, find them and update their password
      const isAlreadyExists =
        createError.message.toLowerCase().includes("already registered") ||
        createError.message.toLowerCase().includes("already exists") ||
        createError.message.toLowerCase().includes("duplicate");

      if (!isAlreadyExists) {
        console.error("Error creating user:", createError);
        return NextResponse.json(
          { error: `No pudimos crear tu cuenta: ${createError.message}` },
          { status: 500 }
        );
      }

      // Find the existing user by email
      const { data: listData, error: listError } = await supabase.auth.admin.listUsers({
        page: 1,
        perPage: 1000,
      });

      if (listError) {
        console.error("Error listing users:", listError);
        return NextResponse.json({ error: "Error al buscar la cuenta existente" }, { status: 500 });
      }

      const existingUser = listData.users.find((u) => u.email === email);
      if (!existingUser) {
        return NextResponse.json(
          { error: "No se pudo encontrar la cuenta existente. Contacta soporte." },
          { status: 500 }
        );
      }

      userId = existingUser.id;
      const { error: updateError } = await supabase.auth.admin.updateUserById(userId, { password });
      if (updateError) {
        console.error("Error updating password:", updateError);
        return NextResponse.json(
          { error: `Error al actualizar la contraseña: ${updateError.message}` },
          { status: 500 }
        );
      }
    } else {
      if (!newUser.user) {
        return NextResponse.json({ error: "No pudimos crear tu cuenta. Intenta de nuevo." }, { status: 500 });
      }
      userId = newUser.user.id;
    }

    // Grant access and store Stripe data
    const { error: profileError } = await supabase
      .from("profiles")
      .upsert({
        id: userId,
        has_access: true,
        stripe_customer_id: customerId,
        stripe_payment_id: paymentIntent,
      });

    if (profileError) {
      console.error("Error updating profile:", profileError);
      return NextResponse.json(
        { error: `Cuenta creada pero error al activar acceso: ${profileError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, email });
  } catch (err) {
    console.error("Unexpected error in create-account:", err);
    return NextResponse.json(
      { error: "Error inesperado del servidor. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
