import { NextRequest, NextResponse } from "next/server";
import { stripe, PRICE_CONFIG } from "@/lib/stripe";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const body = await request.json() as { email?: string };
    const email = user?.email ?? body.email;

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Se requiere un correo electrónico." },
        { status: 400 }
      );
    }

    // Check if user already has access
    if (user) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("has_access")
        .eq("id", user.id)
        .single();

      if (profile?.has_access) {
        return NextResponse.json(
          { success: false, error: "Ya tienes acceso al programa." },
          { status: 400 }
        );
      }
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode:                 "payment",
      customer_email:       email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency:     PRICE_CONFIG.currency,
            unit_amount:  PRICE_CONFIG.amount,
            product_data: {
              name:        PRICE_CONFIG.productName,
              description: PRICE_CONFIG.description,
            },
          },
        },
      ],
      metadata: {
        user_id: user?.id ?? "",
        email,
      },
      success_url: `${request.nextUrl.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${request.nextUrl.origin}/checkout`,
      locale:      "es",
    });

    return NextResponse.json({ success: true, url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { success: false, error: "No pudimos procesar el pago. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
