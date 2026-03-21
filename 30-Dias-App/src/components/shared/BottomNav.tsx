"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Map, BookOpen, TrendingUp, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/inicio",     label: "Inicio",    icon: Home },
  { href: "/calendario", label: "Viaje",     icon: Map },
  { href: "/bitacora",   label: "Bitácora",  icon: BookOpen },
  { href: "/progreso",   label: "Progreso",  icon: TrendingUp },
  { href: "/logros",     label: "Logros",    icon: Award },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-surface)] border-t border-[var(--color-border)] pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="flex items-center justify-around h-16 px-2">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-2 rounded-2xl",
                "min-w-[44px] transition-all duration-200",
                isActive
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text-secondary)]"
              )}
            >
              <Icon
                size={22}
                strokeWidth={isActive ? 2.5 : 1.8}
                className={cn(
                  "transition-all",
                  isActive && "drop-shadow-[0_0_6px_rgba(224,123,57,0.4)]"
                )}
              />
              <span
                className={cn(
                  "font-accent text-[10px] leading-none transition-all",
                  isActive ? "font-bold" : "font-medium"
                )}
              >
                {label}
              </span>
              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[var(--color-primary)]" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
