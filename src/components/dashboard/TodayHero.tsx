"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { DayContent } from "@/types/program.types";

interface TodayHeroProps {
  dayContent:    DayContent;
  childName:     string;
  isCompleted:   boolean;
  illustration?: string;
}

const WEEK_ILLUSTRATIONS: Record<number, string> = {
  1: "/illustrations/connection.svg",
  2: "/illustrations/play-blocks.svg",
  3: "/illustrations/first-word.svg",
  4: "/illustrations/play-music.svg",
};

export function TodayHero({
  dayContent,
  isCompleted,
  illustration,
}: TodayHeroProps) {
  const img = illustration ?? WEEK_ILLUSTRATIONS[dayContent.week] ?? "/illustrations/inicio-hero-w1.png";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div
        className="relative overflow-hidden rounded-3xl p-6 border border-[var(--color-border)] shadow-warm"
        style={{ backgroundColor: `${dayContent.weekColor.replace("var(", "").replace(")", "")}` }}
      >
        {/* Colored overlay using inline styles directly */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{ backgroundColor: `${getWeekBgColor(dayContent.week)}` }}
        />

        {/* Illustration */}
        <div className="absolute right-4 top-4 w-28 h-28 md:w-36 md:h-36 opacity-90">
          <Image
            src={img}
            alt={`Semana ${dayContent.week}`}
            fill
            className="object-contain drop-shadow-md"
            onError={() => {}}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 pr-24 md:pr-32">
          <Badge variant="muted" size="sm" className="mb-3 bg-white/60 text-[var(--color-text-secondary)]">
            Día {dayContent.day} de 30
          </Badge>
          <h2 className="font-display text-2xl font-bold text-[var(--color-text-primary)] leading-tight mb-1">
            {dayContent.titulo}
          </h2>
          <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed mb-1">
            {dayContent.subtitulo}
          </p>
          <p className="font-accent text-xs text-[var(--color-muted)] mb-4">
            {dayContent.weekTheme}
          </p>

          {isCompleted ? (
            <div className="flex items-center gap-2 text-[var(--color-accent-green)]">
              <CheckCircle2 size={20} />
              <span className="font-accent font-semibold text-sm">¡Completado hoy!</span>
            </div>
          ) : (
            <Link href={`/dia/${dayContent.day}`}>
              <Button size="md" className="mt-1">
                Comenzar sesión
                <ArrowRight size={18} />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function getWeekBgColor(week: number): string {
  const colors: Record<number, string> = {
    1: "#F3EFFC",
    2: "#FDF0EF",
    3: "#EEF7FC",
    4: "#EEF8EE",
  };
  return colors[week] ?? "#FFF0E6";
}
