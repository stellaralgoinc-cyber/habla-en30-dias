"use client";

import * as RadixProgress from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

export interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
  trackClassName?: string;
  color?: "primary" | "green" | "gold" | "lavender" | "rose" | "sky" | "sage";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  label?: string;
}

const colorMap = {
  primary:  "var(--color-primary)",
  green:    "var(--color-accent-green)",
  gold:     "var(--color-accent-gold)",
  lavender: "var(--color-accent-lavender)",
  rose:     "var(--color-accent-rose)",
  sky:      "var(--color-accent-sky)",
  sage:     "var(--color-accent-sage)",
};

const sizeMap = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
};

export function Progress({
  value,
  max = 100,
  className,
  trackClassName,
  color = "primary",
  size = "md",
  showLabel = false,
  label,
}: ProgressProps) {
  const percentage = Math.round((value / max) * 100);

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between mb-1">
          <span className="text-xs font-accent text-[var(--color-text-secondary)]">
            {label ?? `${percentage}%`}
          </span>
          <span className="text-xs font-accent text-[var(--color-text-secondary)]">
            {value}/{max}
          </span>
        </div>
      )}
      <RadixProgress.Root
        className={cn(
          "relative overflow-hidden rounded-full bg-[var(--color-border)]",
          sizeMap[size],
          trackClassName
        )}
        value={percentage}
      >
        <RadixProgress.Indicator
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: colorMap[color],
          }}
        />
      </RadixProgress.Root>
    </div>
  );
}
