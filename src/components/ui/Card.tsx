import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
  warm?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, elevated = false, warm = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] p-6",
        elevated && "shadow-card",
        warm && "shadow-warm",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-1 mb-4", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "font-display text-xl font-semibold text-[var(--color-text-primary)] leading-tight",
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("font-body text-sm text-[var(--color-text-secondary)]", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center justify-between mt-4 pt-4 border-t border-[var(--color-border)]", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";
