"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { DayNode } from "@/components/dashboard/DayNode";
import { StreakDisplay } from "@/components/dashboard/StreakDisplay";
import { Progress } from "@/components/ui/Progress";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useTodayDay } from "@/hooks/useTodayDay";
import { useDayProgress } from "@/hooks/useDayProgress";
import { useStreak } from "@/hooks/useStreak";
import { getDayContent } from "@/lib/program-data";
import { SkeletonCalendar } from "@/components/ui/Skeleton";
import { getDayState } from "@/lib/day-utils";
import { PageTransition } from "@/components/shared/PageTransition";
import type { DayContent } from "@/types/program.types";

const WEEKS = [
  { week: 1, theme: "Conectar sin palabras",    color: "#9B8EC4", days: [1,2,3,4,5,6,7] },
  { week: 2, theme: "Jugar con significado",    color: "#E8847A", days: [8,9,10,11,12,13,14] },
  { week: 3, theme: "Las palabras despiertan",  color: "#6DB8D4", days: [15,16,17,18,19,20,21] },
  { week: 4, theme: "El lenguaje vive en todo", color: "#7DB87A", days: [22,23,24,25,26,27,28,29,30] },
];

export default function CalendarioPage() {
  const { todayDay }               = useTodayDay();
  const { completedDays, completedCount, loading } = useDayProgress();
  const { current: streak }        = useStreak();
  const [selectedDay, setSelectedDay]   = useState<DayContent | null>(null);

  if (loading) return <SkeletonCalendar />;

  return (
    <PageTransition>
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-display text-2xl font-bold text-[var(--color-text-primary)]">
          Mi viaje de 30 días
        </h1>
        <p className="font-body text-sm text-[var(--color-text-secondary)] mt-1">
          Cada día que completas es un ladrillo en el puente hacia la primera palabra.
        </p>
      </div>

      {/* Progress overview */}
      <Card elevated>
        <CardContent>
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="font-accent text-sm font-semibold text-[var(--color-text-primary)]">
                {completedCount} de 30 días completados
              </p>
              <p className="font-body text-xs text-[var(--color-text-secondary)] mt-0.5">
                {completedCount === 0
                  ? "¡Tu viaje comienza hoy!"
                  : `Vas por buen camino, sigue así`}
              </p>
            </div>
            <StreakDisplay streak={streak} size="sm" />
          </div>
          <Progress
            value={completedCount}
            max={30}
            showLabel
            label={`${Math.round((completedCount / 30) * 100)}% del programa`}
            size="md"
            color="green"
          />
        </CardContent>
      </Card>

      {/* Week sections */}
      {WEEKS.map(({ week, theme, color, days }) => (
        <div key={week}>
          {/* Week banner */}
          <div
            className="rounded-2xl px-4 py-3 mb-4 border"
            style={{
              backgroundColor: `${color}15`,
              borderColor:     `${color}30`,
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-8 rounded-full"
                style={{ backgroundColor: color }}
              />
              <div>
                <p
                  className="font-accent text-xs font-bold uppercase tracking-wider"
                  style={{ color }}
                >
                  Semana {week}
                </p>
                <p className="font-display text-sm font-semibold text-[var(--color-text-primary)]">
                  {theme}
                </p>
              </div>
            </div>
          </div>

          {/* Day nodes grid */}
          <div className="flex flex-wrap gap-2 md:gap-3 px-2">
            {days.map((dayNum) => {
              const content = getDayContent(dayNum);
              if (!content) return null;
              const state = getDayState(dayNum, todayDay, completedDays);
              return (
                <div key={dayNum} className="flex flex-col items-center gap-1">
                  <DayNode
                    dayContent={content}
                    state={state}
                    onClick={
                      state !== "locked"
                        ? () => setSelectedDay(content)
                        : undefined
                    }
                  />
                  {state === "available" && (
                    <span className="font-accent text-[9px] font-bold text-[var(--color-primary)] uppercase">
                      ¡Hoy!
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Day detail sheet */}
      <AnimatePresence>
        {selectedDay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedDay(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 400 }}
              className="absolute bottom-0 left-0 right-0 bg-[var(--color-surface)] rounded-t-3xl p-6 max-h-[75vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge variant="muted" size="sm" className="mb-2">
                    Día {selectedDay.day} — Semana {selectedDay.week}
                  </Badge>
                  <h2 className="font-display text-xl font-bold text-[var(--color-text-primary)]">
                    {selectedDay.titulo}
                  </h2>
                  <p className="font-body text-sm text-[var(--color-text-secondary)] mt-1">
                    {selectedDay.subtitulo}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedDay(null)}
                  className="p-2 rounded-xl text-[var(--color-muted)] hover:bg-[var(--color-primary-light)]"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                {selectedDay.loEsencial}
              </p>

              <p className="font-body text-xs text-[var(--color-muted)] italic mb-6">
                &ldquo;{selectedDay.fraseMotivacional}&rdquo;
              </p>

              {getDayState(selectedDay.day, todayDay, completedDays) !== "locked" && (
                <Link href={`/dia/${selectedDay.day}`} onClick={() => setSelectedDay(null)}>
                  <Button fullWidth>
                    {getDayState(selectedDay.day, todayDay, completedDays) === "completed"
                      ? "Ver sesión completada"
                      : "Comenzar sesión"}
                  </Button>
                </Link>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </PageTransition>
  );
}
