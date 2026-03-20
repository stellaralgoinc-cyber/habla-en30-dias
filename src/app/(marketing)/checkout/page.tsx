"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { toast } from "sonner";

const INCLUDED = [
  "Programa completo de 30 días con contenido diario",
  "Sesiones de 15 min con guía paso a paso",
  "Bitácora digital para registrar avances",
  "Mapa de la jornada de 30 días",
  "Sistema de logros y celebración",
  "Reinicio Conectivo (herramienta de emergencia)",
  "Acceso de por vida — sin mensualidades",
  "Garantía de 7 días sin preguntas",
];

export default function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleCheckout() {
    setIsLoading(true);
    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });

      const data = await response.json() as { success: boolean; url?: string; error?: string };

      if (!data.success || !data.url) {
        toast.error(data.error ?? "No pudimos iniciar el proceso de pago. Intenta de nuevo.");
        return;
      }

      window.location.href = data.url;
    } catch {
      toast.error("Error de conexión. Verifica tu internet e intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col">
      <header className="px-6 py-4 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <span className="font-display text-xl font-bold text-[var(--color-primary)]">
          Habla en 30 Días
        </span>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <div className="text-4xl mb-3">🌻</div>
            <h1 className="font-display text-3xl font-bold text-[var(--color-text-primary)]">
              El viaje empieza aquí
            </h1>
            <p className="font-body text-[var(--color-text-secondary)] mt-2">
              Una sola inversión. Acceso de por vida.
            </p>
          </div>

          <Card elevated warm>
            <CardContent>
              <div className="text-center mb-6">
                <p className="font-accent text-sm text-[var(--color-muted)] mb-1">Pago único</p>
                <div>
                  <span className="font-accent text-5xl font-black text-[var(--color-text-primary)]">$49</span>
                  <span className="font-accent text-xl text-[var(--color-muted)] ml-1">USD</span>
                </div>
                <p className="font-body text-xs text-[var(--color-muted)] mt-1">
                  Sin mensualidades · Garantía de 7 días
                </p>
              </div>

              <ul className="space-y-2.5 mb-6">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className="text-[var(--color-accent-green)] shrink-0 mt-0.5"
                    />
                    <span className="font-body text-sm text-[var(--color-text-secondary)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                fullWidth
                size="lg"
                onClick={handleCheckout}
                isLoading={isLoading}
              >
                Ir al pago seguro →
              </Button>

              <p className="text-center font-body text-xs text-[var(--color-muted)] mt-3">
                🔒 Pago procesado por Stripe. Tu información está segura.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
