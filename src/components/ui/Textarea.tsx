import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="font-accent text-sm font-medium text-[var(--color-text-primary)]"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]",
            "px-4 py-3 font-body text-[var(--color-text-primary)] placeholder:text-[var(--color-muted)]",
            "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent",
            "transition-all duration-200 resize-none min-h-[100px]",
            error && "border-[var(--color-danger)] focus:ring-[var(--color-danger)]",
            className
          )}
          {...props}
        />
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
Textarea.displayName = "Textarea";
