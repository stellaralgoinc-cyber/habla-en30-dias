"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Mood } from "@/types/program.types";

const MOODS: { id: Mood; emoji: string; label: string }[] = [
  { id: "excelente", emoji: "😄", label: "Excelente" },
  { id: "bien",      emoji: "😊", label: "Bien" },
  { id: "dificil",   emoji: "😔", label: "Fue difícil" },
];

interface MoodCheckinProps {
  dayNumber:   number;
  onSelect:    (mood: Mood) => Promise<void>;
  className?:  string;
}

export function MoodCheckin({ dayNumber, onSelect, className }: MoodCheckinProps) {
  const [selected, setSelected] = useState<Mood | null>(null);
  const [saving, setSaving]     = useState(false);
  const [done, setDone]         = useState(false);

  async function handleSelect(mood: Mood) {
    setSelected(mood);
    setSaving(true);
    await onSelect(mood);
    setSaving(false);
    setDone(true);
  }

  if (done) {
    const chosen = MOODS.find((m) => m.id === selected);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "bg-[var(--color-surface)] rounded-2xl p-4 border border-[var(--color-border)] text-center",
          className
        )}
      >
        <span className="text-3xl">{chosen?.emoji}</span>
        <p className="font-body text-sm text-[var(--color-text-secondary)] mt-1">
          Anotado. Gracias por ser honesta.
        </p>
      </motion.div>
    );
  }

  return (
    <div
      className={cn(
        "bg-[var(--color-surface)] rounded-2xl p-4 border border-[var(--color-border)]",
        className
      )}
    >
      <p className="font-accent text-sm font-semibold text-[var(--color-text-primary)] mb-3">
        ¿Cómo fue el Día {dayNumber - 1}?
      </p>
      <div className="flex gap-3">
        {MOODS.map(({ id, emoji, label }) => (
          <motion.button
            key={id}
            whileTap={{ scale: 0.92 }}
            onClick={() => handleSelect(id)}
            disabled={saving}
            className={cn(
              "flex-1 flex flex-col items-center gap-1.5 py-3 rounded-2xl border-2",
              "transition-all duration-200 font-accent text-xs font-medium",
              selected === id
                ? "border-[var(--color-primary)] bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)]"
            )}
          >
            <span className="text-2xl">{emoji}</span>
            <span>{label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
