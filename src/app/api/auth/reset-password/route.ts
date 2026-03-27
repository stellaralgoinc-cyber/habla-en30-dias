import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendPasswordResetEmail } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const { email, redirectTo: clientRedirectTo } = await request.json() as {
      email:      string;
      redirectTo: string;
    };

    if (!email || !clientRedirectTo) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
    }

    // admin.generateLink uses implicit flow — tokens land in the URL hash (#)
    // which is client-side only, so redirect directly to the page (not /auth/callback)
    const origin = new URL(clientRedirectTo).origin;
    const redirectTo = `${origin}/restablecer-contrasena`;

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data, error } = await supabase.auth.admin.generateLink({
      type:    "recovery",
      email,
      options: { redirectTo },
    });

    if (error) {
      // Don't reveal whether the email exists — always return success to the user
      console.error("generateLink error:", error);
      return NextResponse.json({ success: true });
    }

    if (data?.properties?.action_link) {
      await sendPasswordResetEmail(email, data.properties.action_link);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("reset-password unexpected error:", err);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}
