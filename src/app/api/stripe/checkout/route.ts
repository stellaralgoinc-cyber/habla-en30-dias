import { NextRequest, NextResponse } from "next/server";
import { stripe, PRICE_CONFIG } from "@/lib/stripe";

// This route is intentionally anonymous — no auth check. Payment comes BEFORE
// account creation in the new flow, so any visitor can initiate checkout.
export async function POST(request: NextRequest) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode:                 "payment",
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
