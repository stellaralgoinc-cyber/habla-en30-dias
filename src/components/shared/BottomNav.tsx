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
  Library,
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

const DRAWER_ITEMS = [
  { href: "/logros",    label: "Logros",     icon: Award },
  { href: "/capitulos", label: "Capítulos",  icon: Library },
  { href: "/perfil",    label: "Mi perfil",  icon: User },
] as const;

export function BottomNav() {
  const pathname = usePathname();
  const router   = useRouter();
  const [open, setOpen] = useState(false);

  const moreIsActive = DRAWER_ITEMS.some(
    ({ href }) => pathname === href || pathname.startsWith(href + "/")
  );

  function close() { setOpen(false); }

  async function handleSignOut() {
    const supabase = createClient();
    close();
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <>
      {/* Backdrop — always in DOM for smooth transition */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 md:hidden",
          "transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={close}
      />

      {/* Right-side drawer — always in DOM for smooth transition */}
      <aside
        className={cn(
          "fixed top-0 right-0 h-full w-72 z-50 md:hidden",
          "bg-[var(--color-surface)] flex flex-col",
          "transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-[var(--color-border)]">
          <Link href="/inicio" onClick={close}>
            <span className="font-display text-lg font-bold text-[var(--color-primary)] leading-tight">
              Habla en 30 Días
            </span>
          </Link>
          <button
            onClick={close}
            className="p-1.5 rounded-full text-[var(--color-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {DRAWER_ITEMS.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                onClick={close}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl font-accent text-sm font-medium",
                  "transition-all duration-200",
                  isActive
                    ? "bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-background)] hover:text-[var(--color-text-primary)]"
                )}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} className="shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Footer: Salir */}
        <div className="px-3 pb-4 border-t border-[var(--color-border)] pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
          <button
            onClick={handleSignOut}
            className="flex w-full items-center gap-3 px-4 py-3 rounded-2xl font-accent text-sm font-medium text-[var(--color-muted)] hover:bg-[var(--color-background)] hover:text-red-500 transition-all duration-200"
          >
            <LogOut size={18} strokeWidth={1.8} className="shrink-0" />
            Salir
          </button>
        </div>
      </aside>

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
