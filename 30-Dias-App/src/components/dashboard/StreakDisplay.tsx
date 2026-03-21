"use client";

import { Flame } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StreakDisplayProps {
  streak:    number;
  size?:     "sm" | "md" | "lg";
  className?: string;
}

export function StreakDisplay({ streak, size = "md", className }: StreakDisplayProps) {
  const hasStreak = streak > 0;

  const sizeMap = {
    sm: { flame: 20, number: "text-xl",   label: "text-xs" },
    md: { flame: 28, number: "text-2xl",  label: "text-sm" },
    lg: { flame: 36, number: "text-4xl",  label: "text-base" },
  };

  const { flame, number, label } = sizeMap[size];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <motion.div
        animate={hasStreak ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
      >
        <Flame
          size={flame}
          className={cn(
            "transition-colors",
            hasStreak
              ? "text-[var(--color-accent-gold)]"
              : "text-[var(--color-muted)]"
          )}
          fill={hasStreak ? "var(--color-accent-gold)" : "none"}
        />
      </motion.div>
      <div>
        <span
          className={cn(
            "font-accent font-bold text-[var(--color-text-primary)]",
            number
          )}
        >
          {streak}
        </span>
        <span
          className={cn(
            "font-body text-[var(--color-text-secondary)] ml-1",
            label
          )}
        >
          {streak === 1 ? "día seguido" : "días seguidos"}
        </span>
      </div>
    </div>
  );
}
