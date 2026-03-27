"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Avatar } from "@/components/ui/Avatar";
import { PageHeader } from "@/components/shared/PageHeader";
import { createClient } from "@/lib/supabase/client";
import { useChildProfile } from "@/hooks/useChildProfile";
import { PageTransition } from "@/components/shared/PageTransition";
import type { SpeechStage } from "@/types/program.types";
import { SPEECH_STAGE_LABELS } from "@/types/program.types";

const profileSchema = z.object({
  childName:   z.string().min(1, "El nombre de tu hijo es necesario"),
  birthDate:   z.string().optional(),
  speechStage: z.enum(["pre-verbal", "primeras-silabas", "primeras-palabras", "frases-simples"]),
});

type ProfileForm = z.infer<typeof profileSchema>;

export default function PerfilPage() {
  const router              = useRouter();
  const { profile, loading } = useChildProfile();
  const [isSaving, setSaving] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const supabase            = createClient();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: { speechStage: "pre-verbal" },
  });

  const selectedStage = watch("speechStage");

  useEffect(() => {
    if (profile) {
      reset({
        childName:   profile.child_name,
        birthDate:   profile.birth_date ?? undefined,
        speechStage: profile.speech_stage,
      });
    }
  }, [profile, reset]);

  async function onSubmit(data: ProfileForm) {
    setSaving(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await supabase
        .from("child_profiles")
        .update({
          child_name:   data.childName,
          birth_date:   data.birthDate || null,
          speech_stage: data.speechStage,
        })
        .eq("user_id", user.id);

      if (error) {
        toast.error("No pudimos guardar los cambios. Intenta de nuevo.");
        return;
      }

      toast.success("Perfil actualizado con cariño 💛");
    } finally {
      setSaving(false);
    }
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  async function handleResetProgram() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    // Step 1: Delete all day progress
    const { error: progressError } = await supabase
      .from("day_progress")
      .delete()
      .eq("user_id", user.id);

    if (progressError) {
      toast.error("No pudimos reiniciar el programa. Intenta de nuevo.");
      console.error("Reset — day_progress delete error:", progressError);
      return;
    }

    // Step 2: Delete all bitácora entries
    const { error: bitacoraError } = await supabase
      .from("bitacora_entries")
      .delete()
      .eq("user_id", user.id);

    if (bitacoraError) {
      toast.error("Error al limpiar la Bitácora. Intenta de nuevo.");
      console.error("Reset — bitacora_entries delete error:", bitacoraError);
      return;
    }

    // Step 3: Delete all achievements
    const { error: achievementsError } = await supabase
      .from("achievements")
      .delete()
      .eq("user_id", user.id);

    if (achievementsError) {
      toast.error("Error al reiniciar los logros. Intenta de nuevo.");
      console.error("Reset — achievements delete error:", achievementsError);
      return;
    }

    // Step 4: Reset the program start date
    const { error: resetError } = await supabase
      .from("child_profiles")
      .update({ started_program_at: new Date().toISOString().split("T")[0] })
      .eq("user_id", user.id);

    if (resetError) {
      toast.error("No pudimos reiniciar el programa. Intenta de nuevo.");
      console.error("Reset — child_profiles update error:", resetError);
      return;
    }

    toast.success("¡Programa reiniciado! Un nuevo comienzo para ti y tu hijo 🌱");
    setShowResetConfirm(false);
    router.push("/inicio");
    router.refresh();
  }

  if (loading) {
    return (
      <div className="space-y-4">
        {[1,2,3].map((i) => <div key={i} className="animate-pulse h-24 rounded-3xl bg-[var(--color-border)]" />)}
      </div>
    );
  }

  return (
    <PageTransition>
    <div className="space-y-5">
      <PageHeader
        title="Perfil"
        subtitle="La información de tu hijo y tus preferencias."
      />

      {/* Avatar */}
      <Card elevated>
        <CardContent className="flex items-center gap-4">
          <Avatar name={profile?.child_name} size="lg" />
          <div>
            <p className="font-display text-xl font-bold text-[var(--color-text-primary)]">
              {profile?.child_name ?? "Tu hijo"}
            </p>
            <p className="font-body text-sm text-[var(--color-text-secondary)]">
              {profile?.speech_stage
                ? SPEECH_STAGE_LABELS[profile.speech_stage]
                : "Etapa no definida"}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Edit form */}
      <Card elevated>
        <CardHeader>
          <CardTitle className="text-base">Información del niño</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <Input
              label="Nombre del niño"
              error={errors.childName?.message}
              {...register("childName")}
            />
            <Input
              label="Fecha de nacimiento (opcional)"
              type="date"
              {...register("birthDate")}
            />
            <div className="space-y-1.5">
              <label className="font-accent text-sm font-medium text-[var(--color-text-primary)]">
                Etapa de lenguaje actual
              </label>
              <div className="space-y-2">
                {(Object.entries(SPEECH_STAGE_LABELS) as [SpeechStage, string][]).map(([stage, desc]) => (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => setValue("speechStage", stage)}
                    className={`w-full text-left p-3 rounded-2xl border-2 transition-all duration-200 ${
                      selectedStage === stage
                        ? "border-[var(--color-primary)] bg-[var(--color-primary-light)]"
                        : "border-[var(--color-border)] hover:border-[var(--color-primary)]/50"
                    }`}
                  >
                    <p className="font-body text-xs text-[var(--color-text-secondary)]">{desc}</p>
                  </button>
                ))}
              </div>
            </div>
            <Button type="submit" fullWidth isLoading={isSaving}>
              Guardar cambios
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Program reset */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base text-[var(--color-danger)]">Reiniciar programa</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-body text-sm text-[var(--color-text-secondary)] mb-4">
            Esto borrará todo tu progreso: días completados, entradas de Bitácora y logros. Tu registro de palabras se conservará. Esta acción no se puede deshacer.
          </p>
          {!showResetConfirm ? (
            <Button
              variant="outline"
              onClick={() => setShowResetConfirm(true)}
              className="border-[var(--color-danger)] text-[var(--color-danger)] hover:bg-red-50"
            >
              Reiniciar desde el Día 1
            </Button>
          ) : (
            <div className="space-y-3">
              <p className="font-accent text-sm font-semibold text-[var(--color-danger)]">
                ¿Estás segura? Esta acción no se puede deshacer.
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" onClick={() => setShowResetConfirm(false)}>
                  Cancelar
                </Button>
                <Button variant="danger" onClick={handleResetProgram}>
                  Sí, reiniciar
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Sign out */}
      <Button
        variant="ghost"
        fullWidth
        onClick={handleSignOut}
        className="text-[var(--color-muted)] hover:text-[var(--color-danger)]"
      >
        <LogOut size={18} />
        Cerrar sesión
      </Button>
    </div>
    </PageTransition>
  );
}
