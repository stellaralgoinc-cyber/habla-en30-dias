import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
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

  // Use service role to create user and bypass RLS
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // Check if user already exists
  const { data: existingUsers } = await supabase.auth.admin.listUsers();
  const existingUser = existingUsers?.users.find((u) => u.email === email);

  let userId: string;

  if (existingUser) {
    // User already exists — update their password and grant access
    userId = existingUser.id;
    await supabase.auth.admin.updateUserById(userId, { password });
  } else {
    // Create new user with email confirmed (no verification email needed)
    const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (createError || !newUser.user) {
      console.error("Error creating user:", createError);
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
    return NextResponse.json({ error: "Cuenta creada pero hubo un error al activar el acceso." }, { status: 500 });
  }

  return NextResponse.json({ success: true, email });
}
