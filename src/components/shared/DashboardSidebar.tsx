"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home, Map, BookOpen, TrendingUp, Award,
  Library, User, LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const NAV_ITEMS = [
  { href: "/inicio",     label: "Inicio",    icon: Home,        section: "main" },
  { href: "/calendario", label: "Mi viaje",  icon: Map,         section: "main" },
  { href: "/bitacora",   label: "Bitácora",  icon: BookOpen,    section: "main" },
  { href: "/progreso",   label: "Progreso",  icon: TrendingUp,  section: "main" },
  { href: "/logros",     label: "Logros",    icon: Award,       section: "main" },
  { href: "/capitulos",  label: "Capítulos", icon: Library,     section: "secondary" },
  { href: "/perfil",     label: "Mi perfil", icon: User,        section: "secondary" },
] as const;

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  const mainItems     = NAV_ITEMS.filter((i) => i.section === "main");
  const secondaryItems = NAV_ITEMS.filter((i) => i.section === "secondary");

  return (
    <aside className="hidden md:flex flex-col w-64 bg-[var(--color-surface)] border-r border-[var(--color-border)] h-screen sticky top-0 overflow-y-auto shrink-0">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-[var(--color-border)]">
        <Link href="/inicio">
          <span className="font-display text-lg font-bold text-[var(--color-primary)] leading-tight">
            Habla en<br />30 Días
          </span>
        </Link>
      </div>

      {/* Main nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {mainItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl font-accent text-sm font-medium",
                "transition-all duration-200 group",
                isActive
                  ? "bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg)] hover:text-[var(--color-text-primary)]"
              )}
            >
              <Icon
                size={20}
                strokeWidth={isActive ? 2.5 : 1.8}
                className="shrink-0"
              />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Secondary nav */}
      <div className="px-3 pb-4 border-t border-[var(--color-border)] pt-4 space-y-1">
        {secondaryItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl font-accent text-sm font-medium",
                "transition-all duration-200",
                isActive
                  ? "bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                  : "text-[var(--color-muted)] hover:bg-[var(--color-bg)] hover:text-[var(--color-text-secondary)]"
              )}
            >
              <Icon size={18} strokeWidth={1.8} className="shrink-0" />
              {label}
            </Link>
          );
        })}
        <button
          onClick={handleSignOut}
          className="flex w-full items-center gap-3 px-4 py-3 rounded-2xl font-accent text-sm font-medium text-[var(--color-muted)] hover:bg-[var(--color-bg)] hover:text-[var(--color-danger)] transition-all duration-200"
        >
          <LogOut size={18} strokeWidth={1.8} className="shrink-0" />
          Salir
        </button>
      </div>
    </aside>
  );
}
