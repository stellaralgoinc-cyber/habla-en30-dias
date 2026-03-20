import Image from "next/image";
import { cn } from "@/lib/utils";

export interface AvatarProps {
  src?: string | null;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  xs: { container: "w-8 h-8", text: "text-xs" },
  sm: { container: "w-10 h-10", text: "text-sm" },
  md: { container: "w-14 h-14", text: "text-base" },
  lg: { container: "w-20 h-20", text: "text-xl" },
  xl: { container: "w-28 h-28", text: "text-3xl" },
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}

export function Avatar({ src, name, size = "md", className }: AvatarProps) {
  const { container, text } = sizeMap[size];

  if (src) {
    return (
      <div
        className={cn(
          "relative rounded-full overflow-hidden border-2 border-[var(--color-border)] shrink-0",
          container,
          className
        )}
      >
        <Image
          src={src}
          alt={name ?? "Avatar"}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center shrink-0",
        "bg-[var(--color-primary-light)] border-2 border-[var(--color-border)]",
        "font-accent font-bold text-[var(--color-primary)]",
        container,
        text,
        className
      )}
    >
      {name ? getInitials(name) : "?"}
    </div>
  );
}
