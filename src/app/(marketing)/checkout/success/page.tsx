"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { createClient } from "@/lib/supabase/client";
import type { SpeechStage } from "@/types/program.types";
import { SPEECH_STAGE_LABELS } from "@/types/program.types";

const onboardingSchema = z.object({
  childName:   z.string().min(1, "El nombre de tu hijo es necesario 💛"),
  birthDate:   z.string().optional(),
  speechStage: z.enum(["pre-verbal", "primeras-silabas", "primeras-palabras", "frases-simples"]),
});

type OnboardingForm = z.infer<typeof onboardingSchema>;

function SuccessContent() {
  const router        = useRouter();
  const searchParams  = useSearchParams();
  const sessionId     = searchParams.get("session_id") ?? "";

  // step 0 = create password, step 1 = child info, step 2 = speech stage
  const [step, setStep]                 = useState(0);
  const [email, setEmail]               = useState("");
  const [isLoadingEmail, setLoadingEmail] = useState(true);
  const [password, setPassword]         = useState("");
  const [confirmPassword, setConfirm]   = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isCreating, setIsCreating]     = useState(false);
  const [isSaving, setSaving]           = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<OnboardingForm>({
    resolver:      zodResolver(onboardingSchema),
    defaultValues: { speechStage: "pre-verbal" },
  });

  const selectedStage = watch("speechStage");

  // Fetch email from Stripe session on mount
  useEffect(() => {
    if (!sessionId) {
      setLoadingEmail(false);
      return;
    }

    // Check if user is already logged in (returning user who paid)
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (user?.email) {
        setEmail(user.email);
        setLoadingEmail(false);
        setStep(1); // skip password step for logged-in users
        return;
      }

      // Guest checkout: fetch email from Stripe session
      try {
        const res = await fetch(`/api/stripe/session?session_id=${sessionId}`);
        const data = await res.json() as { email?: string; error?: string };
        if (data.email) {
          setEmail(data.email);
        } else {
          toast.error(data.error ?? "No pudimos verificar tu pago.");
        }
      } catch {
        toast.error("Error al verificar tu pago.");
      } finally {
        setLoadingEmail(false);
      }
    });
  }, [sessionId]);

  async function handleCreateAccount(e: React.FormEvent) {
    e.preventDefault();
    setPasswordError("");

    if (password.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres");
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError("Las contraseñas no coinciden");
      return;
    }

    setIsCreating(true);
    try {
      const res = await fetch("/api/stripe/create-account", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ session_id: sessionId, password }),
      });
      const data = await res.json() as { success?: boolean; email?: string; error?: string };

      if (!data.success) {
        toast.error(data.error ?? "No pudimos crear tu cuenta. Intenta de nuevo.");
        return;
      }

      // Sign in automatically
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email:    email,
        password: password,
      });

      if (signInError) {
        toast.error("Cuenta creada. Ahora puedes iniciar sesión.");
        router.push("/login");
        return;
      }

      setStep(1);
    } catch {
      toast.error("Error de conexión. Intenta de nuevo.");
    } finally {
      setIsCreating(false);
    }
  }

  async function onSubmit(data: OnboardingForm) {
    const supabase = createClient();
    setSaving(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error("Sesión expirada. Inicia sesión de nuevo.");
        router.push("/login");
        return;
      }

      const { error: childError } = await supabase.from("child_profiles").upsert({
        user_id:            user.id,
        child_name:         data.childName,
        birth_date:         data.birthDate || null,
        speech_stage:       data.speechStage,
        started_program_at: new Date().toISOString().split("T")[0],
      }, { onConflict: "user_id" });

      if (childError) {
        toast.error("No pudimos guardar el perfil. Intenta de nuevo.");
        return;
      }

      await supabase
        .from("profiles")
        .update({ onboarding_done: true })
        .eq("id", user.id);

      router.push("/inicio");
      router.refresh();
    } finally {
      setSaving(false);
    }
  }

  const totalSteps = 3;

  if (isLoadingEmail) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-4xl animate-pulse">🌻</div>
          <p className="font-body text-[var(--color-text-secondary)]">Verificando tu pago...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <div className="flex gap-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-1.5 rounded-full transition-all ${
                i < step ? "bg-[var(--color-primary)]" :
                i === step ? "bg-[var(--color-primary)]" :
                "bg-[var(--color-border)]"
              }`}
            />
          ))}
        </div>

        {/* Step 0: Create password */}
        {step === 0 && (
          <>
            <div>
              <h1 className="font-display text-2xl font-bold text-[var(--color-text-primary)]">
                ¡Pago exitoso! Crea tu contraseña
              </h1>
              <p className="font-body text-[var(--color-text-secondary)] mt-1">
                Necesitas una contraseña para acceder al programa.
              </p>
            </div>
            <Card elevated>
              <CardContent>
                <form onSubmit={handleCreateAccount} noValidate className="space-y-4">
                  <div>
                    <p className="font-body text-xs text-[var(--color-muted)] mb-1">Tu correo</p>
                    <p className="font-accent text-sm font-semibold text-[var(--color-text-primary)]">
                      {email}
                    </p>
                  </div>
                  <Input
                    label="Contraseña"
                    type="password"
                    placeholder="Mínimo 8 caracteres"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    label="Confirmar contraseña"
                    type="password"
                    placeholder="Repite tu contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirm(e.target.value)}
                    error={passwordError}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    isLoading={isCreating}
                  >
                    Crear cuenta y continuar →
                  </Button>
                </form>
              </CardContent>
            </Card>
          </>
        )}

        {/* Step 1: Child info */}
        {step === 1 && (
          <>
            <div>
              <h1 className="font-display text-2xl font-bold text-[var(--color-text-primary)]">
                ¡Bienvenida al viaje!
              </h1>
              <p className="font-body text-[var(--color-text-secondary)] mt-1">
                Antes de comenzar, cuéntanos un poco sobre tu hijo.
              </p>
            </div>
            <Card elevated>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    label="¿Cómo se llama tu hijo?"
                    placeholder="Mateo, Isabella, Lucas..."
                    error={errors.childName?.message}
                    {...register("childName")}
                  />
                  <Input
                    label="Fecha de nacimiento (opcional)"
                    type="date"
                    {...register("birthDate")}
                  />
                  <Button
                    type="button"
                    fullWidth
                    size="lg"
                    onClick={() => setStep(2)}
                  >
                    Continuar →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Step 2: Speech stage */}
        {step === 2 && (
          <>
            <div>
              <h1 className="font-display text-2xl font-bold text-[var(--color-text-primary)]">
                ¿Cómo está hablando ahora?
              </h1>
              <p className="font-body text-[var(--color-text-secondary)] mt-1">
                Esto nos ayuda a personalizar el inicio del programa.
              </p>
            </div>
            <Card elevated>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="space-y-3">
                    {(Object.entries(SPEECH_STAGE_LABELS) as [SpeechStage, string][]).map(([stage, desc]) => (
                      <button
                        key={stage}
                        type="button"
                        onClick={() => setValue("speechStage", stage)}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 ${
                          selectedStage === stage
                            ? "border-[var(--color-primary)] bg-[var(--color-primary-light)]"
                            : "border-[var(--color-border)] hover:border-[var(--color-primary)]/50"
                        }`}
                      >
                        <p className="font-accent text-sm font-semibold text-[var(--color-text-primary)]">
                          {stage === "pre-verbal"        ? "Todavía no dice palabras" :
                           stage === "primeras-silabas"  ? "Primeras sílabas" :
                           stage === "primeras-palabras" ? "Primeras palabras" :
                                                           "Frases simples"}
                        </p>
                        <p className="font-body text-xs text-[var(--color-text-secondary)] mt-0.5">
                          {desc}
                        </p>
                      </button>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button
                      type="submit"
                      fullWidth
                      size="lg"
                      isLoading={isSaving}
                    >
                      ¡Empezar el programa! 🌻
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[var(--color-muted)]">Cargando...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
