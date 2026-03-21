"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export default function CheckoutPage() {
  useEffect(() => {
    async function redirectToStripe() {
      try {
        const response = await fetch("/api/stripe/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        });
        const data = await response.json() as { success: boolean; url?: string; error?: string };
        if (data.success && data.url) {
          window.location.href = data.url;
        } else {
          toast.error(data.error ?? "No pudimos iniciar el proceso de pago. Intenta de nuevo.");
        }
      } catch {
        toast.error("Error de conexión. Verifica tu internet e intenta de nuevo.");
      }
    }
    redirectToStripe();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="text-4xl animate-pulse">🌻</div>
        <p className="font-body text-[var(--color-text-secondary)]">
          Preparando tu pago seguro...
        </p>
        <p className="font-body text-sm text-[var(--color-muted)]">
          🔒 Procesado por Stripe
        </p>
      </div>
    </div>
  );
}
