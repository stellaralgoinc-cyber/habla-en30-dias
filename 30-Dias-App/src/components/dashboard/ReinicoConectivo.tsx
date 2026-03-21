"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, Heart, Smile, X } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    step:   1,
    icon:   Wind,
    titulo: "Pausa y respira",
    desc:   "Cierra los ojos por 10 segundos. Solo 10 segundos. Tú puedes.",
    color:  "var(--color-accent-lavender)",
  },
  {
    step:   2,
    icon:   Heart,
    titulo: "Reconecta sin palabras",
    desc:   "Solo abrázalo. Sin expectativas. Sin metas. Solo estar juntos.",
    color:  "var(--color-accent-rose)",
  },
  {
    step:   3,
    icon:   Smile,
    titulo: "Juega por placer",
    desc:   "Sin meta de lenguaje hoy. Solo el placer de estar juntos y reír.",
    color:  "var(--color-accent-sage)",
  },
] as const;

interface ReinicoConectivoModalProps {
  open:         boolean;
  onOpenChange: (open: boolean) => void;
}

function BreathingCircle({ color }: { color: string }) {
  return (
    <div className="flex items-center justify-center h-28 my-4">
      <motion.div
        className="rounded-full"
        style={{ backgroundColor: `${color}30` }}
        animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${color}60` }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          <motion.div
            className="w-8 h-8 rounded-full"
            style={{ backgroundColor: color }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function ReinicoConectivoModal({ open, onOpenChange }: ReinicoConectivoModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const step = STEPS[currentStep];

  function handleNext() {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      onOpenChange(false);
      setCurrentStep(0);
    }
  }

  function handleClose() {
    onOpenChange(false);
    setCurrentStep(0);
  }

  return (
    <Modal open={open} onOpenChange={handleClose} showClose={false} size="sm">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {STEPS.map((s, i) => (
              <div
                key={s.step}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i <= currentStep ? "w-8" : "w-3 bg-[var(--color-border)]"
                )}
                style={i <= currentStep ? { backgroundColor: step.color } : undefined}
              />
            ))}
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-xl text-[var(--color-muted)] hover:bg-[var(--color-primary-light)]"
          >
            <X size={18} />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto"
              style={{ backgroundColor: `${step.color}20` }}
            >
              <step.icon size={28} style={{ color: step.color }} />
            </div>
            <div>
              <p className="font-accent text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider">
                Paso {step.step} de 3
              </p>
              <h2 className="font-display text-xl font-bold text-[var(--color-text-primary)] mt-1">
                {step.titulo}
              </h2>
              <p className="font-body text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                {step.desc}
              </p>
            </div>

            <BreathingCircle color={step.color} />
          </motion.div>
        </AnimatePresence>

        <Button
          onClick={handleNext}
          fullWidth
          style={{ backgroundColor: step.color }}
          className="border-none"
        >
          {currentStep < STEPS.length - 1 ? "Siguiente paso" : "Listo, estamos mejor"}
        </Button>

        <p className="text-xs font-body text-[var(--color-muted)] italic leading-relaxed px-2">
          &ldquo;Tres minutos de reconexión valen más que treinta de práctica forzada.&rdquo;
        </p>
      </div>
    </Modal>
  );
}

export function ReinicoConectivoButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className={cn(
          "fixed bottom-24 right-5 z-30 md:bottom-8",
          "w-14 h-14 rounded-full shadow-warm",
          "bg-[var(--color-accent-lavender)] text-white",
          "flex items-center justify-center",
          "hover:opacity-90 active:scale-95 transition-all"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Reinicio Conectivo"
        aria-label="Abrir Reinicio Conectivo"
      >
        <Wind size={24} />
      </motion.button>
      <ReinicoConectivoModal open={open} onOpenChange={setOpen} />
    </>
  );
}
