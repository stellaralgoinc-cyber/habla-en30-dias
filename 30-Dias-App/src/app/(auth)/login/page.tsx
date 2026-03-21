"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { createClient } from "@/lib/supabase/client";
import { Suspense } from "react";

const loginSchema = z.object({
  email:    z.string().email("Ese correo no parece válido — ¿está bien escrito?"),
  password: z.string().min(1, "Parece que faltó la contraseña 😊"),
});

type LoginForm = z.infer<typeof loginSchema>;

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isMagicLinkLoading, setIsMagicLinkLoading] = useState(false);
  const supabase = createClient();

  const registered = searchParams.get("registered");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginForm) {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email:    data.email,
        password: data.password,
      });

      if (error) {
        toast.error(
          error.message.includes("Invalid login")
            ? "El correo o la contraseña no coinciden. ¿Lo verificas?"
            : "No pudimos iniciar tu sesión. Intenta de nuevo."
        );
        return;
      }

      router.push("/inicio");
      router.refresh();
    } finally {
      setIsLoading(false);
    }
  }

  async function sendMagicLink() {
    const email = getValues("email");
    if (!email || !email.includes("@")) {
      toast.error("Escribe tu correo primero para enviar el enlace mágico.");
      return;
    }

    setIsMagicLinkLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: `${window.location.origin}/inicio` },
      });

      if (error) {
        toast.error("No pudimos enviar el enlace. Verifica el correo e intenta de nuevo.");
        return;
      }

      toast.success("¡Enlace enviado! Revisa tu correo para ingresar sin contraseña.");
    } finally {
      setIsMagicLinkLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-[var(--color-text-primary)]">
          Bienvenida de vuelta
        </h1>
        {registered ? (
          <p className="mt-2 font-body text-[var(--color-accent-green)]">
            ¡Cuenta creada! Confirma tu correo y luego inicia sesión.
          </p>
        ) : (
          <p className="mt-2 font-body text-[var(--color-text-secondary)]">
            Tu hijo te está esperando. ¡Vamos!
          </p>
        )}
      </div>

      <Card elevated>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-4"
          >
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
              placeholder="Tu contraseña"
              error={errors.password?.message}
              {...register("password")}
            />

            <Button
              type="submit"
              fullWidth
              size="lg"
              isLoading={isLoading}
              className="mt-2"
            >
              Iniciar sesión
            </Button>
          </form>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 h-px bg-[var(--color-border)]" />
            <span className="text-xs font-body text-[var(--color-muted)]">o</span>
            <div className="flex-1 h-px bg-[var(--color-border)]" />
          </div>

          <Button
            variant="secondary"
            fullWidth
            size="md"
            className="mt-4"
            isLoading={isMagicLinkLoading}
            onClick={sendMagicLink}
            type="button"
          >
            Entrar con enlace mágico ✉️
          </Button>
        </CardContent>
      </Card>

      <p className="text-center font-body text-sm text-[var(--color-text-secondary)]">
        ¿Aún no tienes cuenta?{" "}
        <Link
          href="/registro"
          className="text-[var(--color-primary)] font-medium hover:underline"
        >
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="animate-pulse h-64 rounded-3xl bg-[var(--color-border)]" />}>
      <LoginForm />
    </Suspense>
  );
}
