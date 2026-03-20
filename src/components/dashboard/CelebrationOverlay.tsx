"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface ConfettiPiece {
  id:     number;
  x:      number;
  color:  string;
  delay:  number;
  size:   number;
}

const COLORS = [
  "var(--color-primary)",
  "var(--color-accent-gold)",
  "var(--color-accent-green)",
  "var(--color-accent-lavender)",
  "var(--color-accent-rose)",
  "var(--color-accent-sky)",
];

function generateConfetti(count: number): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => ({
    id:    i,
    x:     Math.random() * 100,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    delay: Math.random() * 0.8,
    size:  6 + Math.random() * 8,
  }));
}

interface CelebrationOverlayProps {
  open:          boolean;
  onClose:       () => void;
  titulo?:       string;
  mensaje?:      string;
  dayNumber?:    number;
}

export function CelebrationOverlay({
  open,
  onClose,
  titulo   = "¡Lo lograste hoy!",
  mensaje  = "Cada día que eliges estar presente es un regalo para tu hijo.",
  dayNumber,
}: CelebrationOverlayProps) {
  const [confetti] = useState(() => generateConfetti(40));

  useEffect(() => {
    if (open) {
      const timer = setTimeout(onClose, 6000);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Confetti */}
          {confetti.map((piece) => (
            <motion.div
              key={piece.id}
              className="absolute top-0 rounded-sm"
              style={{
                left:            `${piece.x}%`,
                width:           piece.size,
                height:          piece.size,
                backgroundColor: piece.color,
              }}
              initial={{ y: -20, opacity: 0, rotate: 0 }}
              animate={{
                y:       ["0vh", "110vh"],
                opacity: [0, 1, 1, 0],
                rotate:  [0, 180, 360],
              }}
              transition={{
                duration: 2.5,
                delay:    piece.delay,
                ease:     "easeIn",
              }}
            />
          ))}

          {/* Modal card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
            className="relative bg-[var(--color-surface)] rounded-3xl p-8 mx-4 max-w-sm w-full text-center shadow-warm border border-[var(--color-border)]"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              🎉
            </motion.div>
            {dayNumber && (
              <p className="font-accent text-sm font-semibold text-[var(--color-muted)] mb-1">
                Día {dayNumber} completado
              </p>
            )}
            <h2 className="font-display text-2xl font-bold text-[var(--color-text-primary)] mb-3">
              {titulo}
            </h2>
            <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
              {mensaje}
            </p>
            <Button onClick={onClose} fullWidth>
              ¡Gracias!
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
