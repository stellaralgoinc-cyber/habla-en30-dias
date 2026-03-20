import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full font-accent font-semibold border transition-colors",
  {
    variants: {
      variant: {
        default:   "bg-[var(--color-primary-light)] text-[var(--color-primary)] border-transparent",
        gold:      "bg-amber-50 text-[var(--color-accent-gold)] border-amber-200",
        green:     "bg-emerald-50 text-[var(--color-accent-green)] border-emerald-200",
        lavender:  "bg-purple-50 text-[var(--color-accent-lavender)] border-purple-200",
        rose:      "bg-rose-50 text-[var(--color-accent-rose)] border-rose-200",
        sky:       "bg-sky-50 text-[var(--color-accent-sky)] border-sky-200",
        sage:      "bg-green-50 text-[var(--color-accent-sage)] border-green-200",
        muted:     "bg-[var(--color-primary-light)] text-[var(--color-muted)] border-transparent",
        danger:    "bg-red-50 text-[var(--color-danger)] border-red-200",
        outline:   "border-[var(--color-border)] text-[var(--color-text-secondary)] bg-transparent",
      },
      size: {
        sm:  "px-2 py-0.5 text-xs",
        md:  "px-3 py-1 text-sm",
        lg:  "px-4 py-1.5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size:    "sm",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Badge.displayName = "Badge";
