"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { createClient } from "@/lib/supabase/client";
import { CheckCircle } from "lucide-react";

const schema = z
  .object({
    password: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres.")
      .regex(/[A-Z]/, "Incluye al menos una letra mayúscula.")
      .regex(/[0-9]/, "Incluye al menos un número."),
    confirm: z.string().min(1, "Confirma tu nueva contraseña."),
  })
  .refine((d) => d.password === d.confirm, {
    message: "Las contraseñas no coinciden.",
    path: ["confirm"],
  });

type FormData = z.infer<typeof schema>;

export default function RestablecerContrasenaPage() {
  const router = useRouter();
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    // Session is set in cookies by /auth/verify before arriving here
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setIsReady(true);
      }
    });
  }, [supabase]);

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: data.password });

      if (error) {
        toast.error(
          error.message.includes("same password")
            ? "La nueva contraseña debe ser diferente a la anterior."
            : "No pudimos actualizar tu contraseña. El enlace puede haber expirado."
        );
        return;
      }

      setIsDone(true);

      setTimeout(() => {
        router.push("/inicio");
      }, 2500);
    } finally {
      setIsLoading(false);
    }
  }

  if (isDone) {
    return (
      <div className="space-y-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-accent-green)]/10 text-[var(--color-accent-green)]">
          <CheckCircle size={40} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold text-[var(--color-text-primary)]">
            Contraseña actualizada
          </h1>
          <p className="mt-2 font-body text-[var(--color-text-secondary)]">
            Tu contraseña fue cambiada. Te llevamos de vuelta al programa…
          </p>
        </div>
      </div>
    );
  }

  if (!isReady) {
    return (
      <div className="space-y-6 text-center">
        <div className="mx-auto h-16 w-16 animate-pulse rounded-full bg-[var(--color-border)]" />
        <div>
          <h1 className="font-display text-2xl font-bold text-[var(--color-text-primary)]">
            Verificando enlace…
          </h1>
          <p className="mt-2 font-body text-sm text-[var(--color-text-secondary)]">
            Si el enlace expiró, solicita uno nuevo desde el inicio de sesión.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-[var(--color-text-primary)]">
          Nueva contraseña
        </h1>
        <p className="mt-2 font-body text-[var(--color-text-secondary)]">
          Elige una contraseña segura para proteger tu cuenta.
        </p>
      </div>

      <Card elevated>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <Input
              label="Nueva contraseña"
              type="password"
              placeholder="Mínimo 8 caracteres"
              hint="Al menos 8 caracteres, una mayúscula y un número."
              error={errors.password?.message}
              {...register("password")}
            />
            <Input
              label="Confirmar contraseña"
              type="password"
              placeholder="Repite tu nueva contraseña"
              error={errors.confirm?.message}
              {...register("confirm")}
            />

            <Button
              type="submit"
              fullWidth
              size="lg"
              isLoading={isLoading}
              className="mt-2"
            >
              Guardar nueva contraseña
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
