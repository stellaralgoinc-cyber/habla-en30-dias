"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { createClient } from "@/lib/supabase/client";

const registroSchema = z.object({
  fullName: z
    .string()
    .min(2, "Parece que faltó tu nombre completo 😊")
    .max(80, "El nombre es demasiado largo"),
  email: z
    .string()
    .email("Ese correo no parece válido — ¿está bien escrito?"),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

type RegistroForm = z.infer<typeof registroSchema>;

export default function RegistroPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistroForm>({
    resolver: zodResolver(registroSchema),
  });

  async function onSubmit(data: RegistroForm) {
    const supabase = createClient();
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: { full_name: data.fullName },
        },
      });

      if (error) {
        toast.error(
          error.message === "User already registered"
            ? "Ya existe una cuenta con ese correo. ¿Quieres iniciar sesión?"
            : "Hubo un problema al crear tu cuenta. Intenta de nuevo."
        );
        return;
      }

      toast.success("¡Cuenta creada! Revisa tu correo para confirmar.");
      router.push("/login?registered=true");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-[var(--color-text-primary)]">
          Empieza el viaje
        </h1>
        <p className="mt-2 font-body text-[var(--color-text-secondary)]">
          30 días que pueden cambiar la vida de tu hijo.
        </p>
      </div>

      <Card elevated>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-4"
          >
            <Input
              label="Tu nombre completo"
              placeholder="Andrea López"
              error={errors.fullName?.message}
              {...register("fullName")}
            />
            <Input
              label="Correo electrónico"
              type="email"
              placeholder="andrea@correo.com"
              error={errors.email?.message}
              {...register("email")}
            />
            <Input
              label="Contraseña"
              type="password"
              placeholder="Mínimo 8 caracteres"
              error={errors.password?.message}
              {...register("password")}
            />
            <Input
              label="Confirmar contraseña"
              type="password"
              placeholder="Repite tu contraseña"
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />

            <Button
              type="submit"
              fullWidth
              size="lg"
              isLoading={isLoading}
              className="mt-2"
            >
              Crear mi cuenta
            </Button>
          </form>
        </CardContent>
      </Card>

      <p className="text-center font-body text-sm text-[var(--color-text-secondary)]">
        ¿Ya tienes cuenta?{" "}
        <Link
          href="/login"
          className="text-[var(--color-primary)] font-medium hover:underline"
        >
          Inicia sesión aquí
        </Link>
      </p>
    </div>
  );
}
