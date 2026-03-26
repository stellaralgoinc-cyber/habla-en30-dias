import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createClient as createServerClient } from "@supabase/supabase-js";
import type Stripe from "stripe";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Use service role client for webhook — bypasses RLS
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    // NOTE (new flow): In the payment-first flow, the webhook may fire BEFORE the
    // user account exists (account is created on /checkout/success after payment).
    // The userId branch below is a no-op in that case since metadata.user_id is "".
    // The create-account route is the authoritative place that grants has_access.

    if (session.payment_status !== "paid") {
      return NextResponse.json({ received: true });
    }

    const userId    = session.metadata?.user_id;
    const email     = session.metadata?.email ?? session.customer_email;
    const customerId = typeof session.customer === "string" ? session.customer : null;

    if (userId) {
      const { error } = await supabase
        .from("profiles")
        .update({
          has_access:        true,
          stripe_customer_id: customerId,
          stripe_payment_id:  session.payment_intent as string,
        })
        .eq("id", userId);

      if (error) {
        console.error("Error updating profile (by userId):", error);
        return NextResponse.json({ error: "DB update failed" }, { status: 500 });
      }
    } else if (email) {
      // Fallback: match by email via auth.users
      const { data: users, error: usersError } = await supabase.auth.admin.listUsers();
      if (usersError) {
        console.error("Error listing users:", usersError);
        return NextResponse.json({ error: "Auth lookup failed" }, { status: 500 });
      }

      const matchedUser = users.users.find((u) => u.email === email);
      if (matchedUser) {
        await supabase
          .from("profiles")
          .update({
            has_access:        true,
            stripe_customer_id: customerId,
            stripe_payment_id:  session.payment_intent as string,
          })
          .eq("id", matchedUser.id);
      }
    }
  }

  return NextResponse.json({ received: true });
}

