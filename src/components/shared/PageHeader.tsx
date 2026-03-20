import Image from "next/image";
import { cn } from "@/lib/utils";

export interface PageHeaderProps {
  title:        string;
  subtitle?:    string;
  illustration?: string;
  illustrationAlt?: string;
  accentColor?: string;
  className?:   string;
  badge?:       React.ReactNode;
  action?:      React.ReactNode;
}

export function PageHeader({
  title,
  subtitle,
  illustration,
  illustrationAlt,
  accentColor,
  className,
  badge,
  action,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl p-6 mb-6",
        "bg-[var(--color-primary-light)] border border-[var(--color-border)]",
        className
      )}
      style={accentColor ? { backgroundColor: `${accentColor}15`, borderColor: `${accentColor}30` } : undefined}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {badge && <div className="mb-2">{badge}</div>}
          <h1
            className="font-display text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] leading-tight"
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 font-body text-sm text-[var(--color-text-secondary)] max-w-md leading-relaxed">
              {subtitle}
            </p>
          )}
          {action && <div className="mt-4">{action}</div>}
        </div>
        {illustration && (
          <div className="relative shrink-0 w-24 h-24 md:w-32 md:h-32">
            <Image
              src={illustration}
              alt={illustrationAlt ?? title}
              fill
              className="object-contain drop-shadow-md"
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
}
