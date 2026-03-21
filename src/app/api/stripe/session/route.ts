import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "session_id requerido" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Pago no completado" }, { status: 400 });
    }

    const email = session.customer_email ?? session.customer_details?.email;

    if (!email) {
      return NextResponse.json({ error: "Email no encontrado en la sesión" }, { status: 400 });
    }

    return NextResponse.json({ email });
  } catch (error) {
    console.error("Error retrieving Stripe session:", error);
    return NextResponse.json({ error: "Sesión inválida" }, { status: 400 });
  }
}
