import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// This route handles child profile + onboarding completion for users who have
// paid and created an account but have NOT yet verified their email and are
// therefore NOT signed in. It uses the service role client to bypass RLS.

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as {
      user_id:      string;
      child_name:   string;
      birth_date?:  string | null;
      speech_stage: string;
    };
    const { user_id, child_name, birth_date, speech_stage } = body;

    if (!user_id || !child_name || !speech_stage) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
    }

    const validStages = ["pre-verbal", "primeras-silabas", "primeras-palabras", "frases-simples"];
    if (!validStages.includes(speech_stage)) {
      return NextResponse.json({ error: "Etapa de habla inválida" }, { status: 400 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Verify user exists and has paid access before saving anything
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("id, has_access")
      .eq("id", user_id)
      .single();

    if (profileError || !profile) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
    }

    if (!profile.has_access) {
      return NextResponse.json({ error: "Sin acceso al programa" }, { status: 403 });
    }

    // Remove any existing child profile to avoid duplicates
    await supabase
      .from("child_profiles")
      .delete()
      .eq("user_id", user_id);

    // Insert the new child profile
    const { error: childError } = await supabase
      .from("child_profiles")
      .insert({
        user_id,
        child_name,
        birth_date:         birth_date || null,
        speech_stage:       speech_stage as "pre-verbal" | "primeras-silabas" | "primeras-palabras" | "frases-simples",
        started_program_at: new Date().toISOString().split("T")[0],
      });

    if (childError) {
      console.error("child_profiles insert error:", childError);
      return NextResponse.json(
        { error: `Error al guardar el perfil: ${childError.message}` },
        { status: 500 }
      );
    }

    // Mark onboarding as done
    const { error: onboardingError } = await supabase
      .from("profiles")
      .update({ onboarding_done: true })
      .eq("id", user_id);

    if (onboardingError) {
      console.error("onboarding_done update error:", onboardingError);
      // Non-fatal — child profile was saved, so we still return success
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error in /api/onboarding:", err);
    return NextResponse.json(
      { error: "Error inesperado del servidor. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
