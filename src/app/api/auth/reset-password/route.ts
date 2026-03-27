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

    const origin = new URL(clientRedirectTo).origin;

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // redirectTo is required by the API but we won't use it —
    // we send our own /auth/verify URL instead so we're never dependent
    // on Supabase's redirect URL allowlist
    const { data, error } = await supabase.auth.admin.generateLink({
      type:    "recovery",
      email,
      options: { redirectTo: `${origin}/restablecer-contrasena` },
    });

    if (error) {
      // Don't reveal whether the email exists — always return success
      console.error("generateLink error:", error);
      return NextResponse.json({ success: true });
    }

    const hashedToken = data?.properties?.hashed_token;
    if (hashedToken) {
      // Build our own verify URL — token exchange happens server-side at /auth/verify,
      // completely bypassing Supabase's redirect mechanism
      const verifyUrl = `${origin}/auth/verify?token=${hashedToken}&type=recovery`;
      await sendPasswordResetEmail(email, verifyUrl);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("reset-password unexpected error:", err);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}
