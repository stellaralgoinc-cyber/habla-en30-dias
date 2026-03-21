"use client";

import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-2xl font-accent font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-[44px] select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] active:scale-[0.98] shadow-warm",
        secondary:
          "bg-[var(--color-primary-light)] text-[var(--color-primary)] hover:bg-[var(--color-border)] border border-[var(--color-border)]",
        ghost:
          "bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]",
        outline:
          "bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]",
        danger:
          "bg-[var(--color-danger)] text-white hover:opacity-90 active:scale-[0.98]",
        gold:
          "bg-[var(--color-accent-gold)] text-white hover:opacity-90 active:scale-[0.98] shadow-warm",
      },
      size: {
        sm:   "px-4 py-2 text-sm",
        md:   "px-6 py-3 text-base",
        lg:   "px-8 py-4 text-lg",
        xl:   "px-10 py-5 text-xl",
        icon: "w-11 h-11 p-0",
      },
      fullWidth: {
        true:  "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant:   "primary",
      size:      "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Cargando...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
