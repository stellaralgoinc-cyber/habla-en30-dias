"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { ArrowLeft, Mail } from "lucide-react";

const schema = z.object({
  email: z.string().email("Ese correo no parece válido — ¿está bien escrito?"),
});

type FormData = z.infer<typeof schema>;

export default function OlvideContrasenaPage() {
  const [sent, setSent] = useState(false);
  const [sentEmail, setSentEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("error") === "link_expirado") {
      toast.error("El enlace expiró. Solicita uno nuevo aquí.");
    }
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          email:      data.email,
          redirectTo: `${window.location.origin}/restablecer-contrasena`,
        }),
      });

      if (!res.ok) {
        toast.error("No pudimos enviar el correo. Intenta de nuevo.");
        return;
      }

      setSentEmail(data.email);
      setSent(true);
    } finally {
      setIsLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent-green)]/10 text-[var(--color-accent-green)]">
            <Mail size={28} />
          </div>
          <h1 className="font-display text-3xl font-bold text-[var(--color-text-primary)]">
            Revisa tu correo
          </h1>
          <p className="mt-2 font-body text-[var(--color-text-secondary)]">
            Si <span className="font-medium text-[var(--color-text-primary)]">{sentEmail}</span> tiene
            una cuenta activa, recibirás el enlace en breve.
          </p>
        </div>

        <Card elevated>
          <CardContent>
            <div className="space-y-3 text-sm font-body text-[var(--color-text-secondary)]">
              <p className="flex items-start gap-2">
                <span className="mt-0.5 text-[var(--color-accent-green)]">✓</span>
                El enlace expira en <strong className="text-[var(--color-text-primary)]">1 hora</strong>.
              </p>
              <p className="flex items-start gap-2">
                <span className="mt-0.5 text-[var(--color-accent-green)]">✓</span>
                Revisa también la carpeta de spam o correo no deseado.
              </p>
              <p className="flex items-start gap-2">
                <span className="mt-0.5 text-[var(--color-accent-green)]">✓</span>
                El enlace solo funciona una vez.
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="text-center font-body text-sm text-[var(--color-text-secondary)]">
          ¿No llegó nada?{" "}
          <button
            onClick={() => setSent(false)}
            className="text-[var(--color-primary)] font-medium hover:underline"
          >
            Intentar con otro correo
          </button>
        </p>

        <div className="text-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-sm font-body text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
          >
            <ArrowLeft size={14} />
            Volver al inicio de sesión
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-[var(--color-text-primary)]">
          Recupera tu acceso
        </h1>
        <p className="mt-2 font-body text-[var(--color-text-secondary)]">
          Te enviamos un enlace para establecer una nueva contraseña.
        </p>
      </div>

      <Card elevated>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <Input
              label="Correo electrónico"
              type="email"
              placeholder="andrea@correo.com"
              error={errors.email?.message}
              {...register("email")}
            />

            <Button
              type="submit"
              fullWidth
              size="lg"
              isLoading={isLoading}
              className="mt-2"
            >
              Enviar enlace de recuperación
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="text-center">
        <Link
          href="/login"
          className="inline-flex items-center gap-1.5 text-sm font-body text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
        >
          <ArrowLeft size={14} />
          Volver al inicio de sesión
        </Link>
      </div>
    </div>
  );
}
