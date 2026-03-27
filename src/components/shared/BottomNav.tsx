"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  Map,
  BookOpen,
  TrendingUp,
  MoreHorizontal,
  Award,
  BookMarked,
  User,
  LogOut,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";

const MAIN_NAV = [
  { href: "/inicio",     label: "Inicio",   icon: Home },
  { href: "/calendario", label: "Viaje",    icon: Map },
  { href: "/bitacora",   label: "Bitácora", icon: BookOpen },
  { href: "/progreso",   label: "Progreso", icon: TrendingUp },
] as const;

const MORE_ITEMS = [
  { href: "/logros",    label: "Logros",      icon: Award },
  { href: "/capitulos", label: "Capítulos",   icon: BookMarked },
  { href: "/perfil",    label: "Mi perfil",   icon: User },
] as const;

export function BottomNav() {
  const pathname  = usePathname();
  const router    = useRouter();
  const [open, setOpen] = useState(false);

  const moreIsActive = MORE_ITEMS.some(
    ({ href }) => pathname === href || pathname.startsWith(href + "/")
  );

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-up sheet */}
      <div
        className={cn(
          "fixed left-0 right-0 z-50 md:hidden",
          "bg-[var(--color-surface)] rounded-t-3xl border-t border-[var(--color-border)]",
          "transition-transform duration-300 ease-out pb-[env(safe-area-inset-bottom)]",
          open ? "translate-y-0" : "translate-y-full",
          // position just above bottom nav
          "bottom-16"
        )}
      >
        <div className="px-4 pt-3 pb-4">
          <div className="flex items-center justify-between mb-4">
            <span className="font-accent text-sm font-semibold text-[var(--color-text-secondary)]">
              Más opciones
            </span>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-full text-[var(--color-muted)] hover:text-[var(--color-text-secondary)]"
            >
              <X size={18} />
            </button>
          </div>

          <div className="space-y-1">
            {MORE_ITEMS.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-2xl transition-colors",
                    isActive
                      ? "bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                      : "text-[var(--color-text-secondary)] hover:bg-[var(--color-background)]"
                  )}
                >
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                  <span className={cn("font-body text-sm", isActive ? "font-semibold" : "font-medium")}>
                    {label}
                  </span>
                </Link>
              );
            })}

            {/* Divider */}
            <div className="my-2 border-t border-[var(--color-border)]" />

            <button
              onClick={handleSignOut}
              className="flex w-full items-center gap-3 px-4 py-3 rounded-2xl text-[var(--color-text-secondary)] hover:bg-[var(--color-background)] transition-colors"
            >
              <LogOut size={20} strokeWidth={1.8} />
              <span className="font-body text-sm font-medium">Salir</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom nav bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-surface)] border-t border-[var(--color-border)] pb-[env(safe-area-inset-bottom)] md:hidden">
        <div className="flex items-center justify-around h-16 px-2">
          {MAIN_NAV.map(({ href, label, icon: Icon }) => {
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

          {/* Más button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex flex-col items-center gap-0.5 px-3 py-2 rounded-2xl",
              "min-w-[44px] transition-all duration-200",
              moreIsActive || open
                ? "text-[var(--color-primary)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-text-secondary)]"
            )}
          >
            <MoreHorizontal
              size={22}
              strokeWidth={moreIsActive || open ? 2.5 : 1.8}
              className={cn(
                "transition-all",
                (moreIsActive || open) && "drop-shadow-[0_0_6px_rgba(224,123,57,0.4)]"
              )}
            />
            <span
              className={cn(
                "font-accent text-[10px] leading-none transition-all",
                moreIsActive || open ? "font-bold" : "font-medium"
              )}
            >
              Más
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
