import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, leftIcon, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="font-accent text-sm font-medium text-[var(--color-text-primary)]"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-muted)]">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]",
              "px-4 py-3 font-body text-[var(--color-text-primary)] placeholder:text-[var(--color-muted)]",
              "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent",
              "transition-all duration-200 min-h-[44px]",
              leftIcon && "pl-10",
              error && "border-[var(--color-danger)] focus:ring-[var(--color-danger)]",
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="text-xs font-body text-[var(--color-danger)]">{error}</p>
        )}
        {hint && !error && (
          <p className="text-xs font-body text-[var(--color-muted)]">{hint}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
