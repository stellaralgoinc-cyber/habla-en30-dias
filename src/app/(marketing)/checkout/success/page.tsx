"use client";

export const dynamic = "force-dynamic";

import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
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

function OnboardingContent() {
  const router      = useRouter();
  const [step, setStep] = useState(0);
  const [isSaving, setSaving] = useState(false);

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

      // Create child profile
      const { error: childError } = await supabase.from("child_profiles").insert({
        user_id:             user.id,
        child_name:          data.childName,
        birth_date:          data.birthDate || null,
        speech_stage:        data.speechStage,
        started_program_at:  new Date().toISOString().split("T")[0],
      });

      if (childError && !childError.message.includes("unique")) {
        toast.error("No pudimos guardar el perfil. Intenta de nuevo.");
        return;
      }

      // Mark onboarding done
      const { error: profileError } = await supabase
        .from("profiles")
        .update({ onboarding_done: true })
        .eq("id", user.id);

      if (profileError) {
        toast.error("Error al finalizar el registro. Intenta de nuevo.");
        return;
      }

      router.push("/inicio");
      router.refresh();
    } finally {
      setSaving(false);
    }
  }

  const STEPS = [
    {
      title:    "¡Bienvenida al viaje!",
      subtitle: "Antes de comenzar, cuéntanos un poco sobre tu hijo.",
      content: (
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
        </div>
      ),
    },
    {
      title:    "¿Cómo está hablando ahora?",
      subtitle: "Esto nos ayuda a personalizar el inicio del programa.",
      content: (
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
      ),
    },
  ];

  const currentStep = STEPS[step];
  const isLast      = step === STEPS.length - 1;

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <div className="flex gap-2">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-1.5 rounded-full transition-all ${
                i <= step ? "bg-[var(--color-primary)]" : "bg-[var(--color-border)]"
              }`}
            />
          ))}
        </div>

        <div>
          <h1 className="font-display text-2xl font-bold text-[var(--color-text-primary)]">
            {currentStep.title}
          </h1>
          <p className="font-body text-[var(--color-text-secondary)] mt-1">
            {currentStep.subtitle}
          </p>
        </div>

        <Card elevated>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {currentStep.content}

              <div className="mt-6">
                {isLast ? (
                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    isLoading={isSaving}
                  >
                    ¡Empezar el programa! 🌻
                  </Button>
                ) : (
                  <Button
                    type="button"
                    fullWidth
                    size="lg"
                    onClick={() => setStep((s) => s + 1)}
                  >
                    Continuar →
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-[var(--color-muted)]">Cargando...</div></div>}>
      <OnboardingContent />
    </Suspense>
  );
}
