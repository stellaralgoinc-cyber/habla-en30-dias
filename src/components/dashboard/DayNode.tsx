"use client";

import { motion } from "framer-motion";
import { Check, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DayContent } from "@/types/program.types";

type DayState = "locked" | "available" | "completed" | "missed";

interface DayNodeProps {
  dayContent: DayContent;
  state:      DayState;
  onClick?:   () => void;
}

const stateStyles: Record<DayState, { container: string; text: string }> = {
  locked:    {
    container: "bg-[var(--color-border)] border-[var(--color-border)] opacity-50",
    text:      "text-[var(--color-muted)]",
  },
  available: {
    container: "bg-[var(--color-primary)] border-[var(--color-primary-dark)] shadow-warm",
    text:      "text-white",
  },
  completed: {
    container: "bg-[var(--color-accent-green)] border-[#3DA06A]",
    text:      "text-white",
  },
  missed: {
    container: "bg-[var(--color-surface)] border-[var(--color-border)] opacity-60",
    text:      "text-[var(--color-muted)]",
  },
};

export function DayNode({ dayContent, state, onClick }: DayNodeProps) {
  const { container, text } = stateStyles[state];

  return (
    <motion.button
      onClick={onClick}
      disabled={state === "locked"}
      whileTap={state !== "locked" ? { scale: 0.92 } : undefined}
      animate={state === "available" ? { scale: [1, 1.05, 1] } : {}}
      transition={
        state === "available"
          ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
      className={cn(
        "relative w-10 h-10 md:w-12 md:h-12 rounded-2xl border-2 flex items-center justify-center",
        "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2",
        container,
        state !== "locked" && "cursor-pointer hover:scale-105"
      )}
      title={`Día ${dayContent.day}: ${dayContent.titulo}`}
      aria-label={`Día ${dayContent.day}: ${dayContent.titulo} — ${state}`}
    >
      {state === "locked" && <Lock size={14} className="text-[var(--color-muted)]" />}
      {state === "completed" && <Check size={16} strokeWidth={3} className="text-white" />}
      {state === "missed" && (
        <span className="font-accent text-xs font-bold text-[var(--color-muted)]">
          {dayContent.day}
        </span>
      )}
      {(state === "available") && (
        <span className={cn("font-accent text-sm font-bold", text)}>
          {dayContent.day}
        </span>
      )}

      {state === "available" && (
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-[var(--color-primary)]"
          animate={{ scale: [1, 1.3, 1.6], opacity: [0.8, 0.4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
}
