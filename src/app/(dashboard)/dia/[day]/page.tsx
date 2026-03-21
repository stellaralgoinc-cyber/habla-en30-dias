"use client";

import { notFound, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ActivityStepper } from "@/components/dashboard/ActivityStepper";
import { Badge } from "@/components/ui/Badge";
import { getDayContent } from "@/lib/program-data";
import { useDayProgress } from "@/hooks/useDayProgress";
import { useBitacora } from "@/hooks/useBitacora";
import { PageTransition } from "@/components/shared/PageTransition";
import type { Mood } from "@/types/program.types";

interface DayPageProps {
  params: { day: string };
}

export default function DayPage({ params }: DayPageProps) {
  const dayNumber = parseInt(params.day, 10);
  const router    = useRouter();

  const dayContent   = getDayContent(isNaN(dayNumber) ? 0 : dayNumber);
  const { completeDay } = useDayProgress(dayNumber);
  const { saveEntry }   = useBitacora();

  if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 30 || !dayContent) {
    notFound();
  }

  async function handleComplete(params: {
    checklist:  Record<string, boolean>;
    mood:       Mood;
    phaseTimes: Record<string, number>;
    bitacora:   { observedAdvance: string; connectionMoment?: string; parentFeeling?: string };
  }) {
    const [progressOk] = await Promise.all([
      completeDay({
        day:        dayNumber,
        checklist:  params.checklist,
        mood:       params.mood,
        phaseTimes: params.phaseTimes,
      }),
      saveEntry({
        dayNumber:        dayNumber,
        observedAdvance:  params.bitacora.observedAdvance,
        connectionMoment: params.bitacora.connectionMoment,
        parentFeeling:    params.bitacora.parentFeeling,
      }),
    ]);

    if (progressOk) {
      // Redirect to inicio after a delay (celebration fires first in ActivityStepper)
      setTimeout(() => router.push("/inicio"), 3500);
    }
  }

  return (
    <PageTransition>
    <div className="space-y-5">
      {/* Back nav */}
      <div className="flex items-center gap-3">
        <Link
          href="/calendario"
          className="flex items-center gap-1 font-accent text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
        >
          <ArrowLeft size={16} />
          Volver al mapa
        </Link>
      </div>

      {/* Day header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Badge variant="muted" size="sm">Día {dayContent.day} de 30</Badge>
          <Badge size="sm" style={{ backgroundColor: `${dayContent.weekColor}20`, color: dayContent.weekColor }}>
            {dayContent.weekTheme}
          </Badge>
        </div>
        <h1 className="font-display text-2xl font-bold text-[var(--color-text-primary)]">
          {dayContent.titulo}
        </h1>
        <p className="font-body text-sm text-[var(--color-text-secondary)] mt-1">
          {dayContent.loEsencial}
        </p>
        <div className="mt-3 p-3 rounded-2xl bg-[var(--color-primary-light)] border border-[var(--color-primary)]/20">
          <p className="font-accent text-xs font-semibold text-[var(--color-primary)] mb-1">
            Objetivo del día
          </p>
          <p className="font-body text-sm text-[var(--color-text-secondary)]">
            {dayContent.objetivoDia}
          </p>
        </div>
      </div>

      <ActivityStepper dayContent={dayContent} onComplete={handleComplete} />
    </div>
    </PageTransition>
  );
}
