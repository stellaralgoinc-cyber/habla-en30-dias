"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";
import { useDayProgress } from "@/hooks/useDayProgress";
import { useBitacora } from "@/hooks/useBitacora";
import { useWordLog } from "@/hooks/useWordLog";
import { useAchievements } from "@/hooks/useAchievements";
import { BADGE_CATEGORIES } from "@/lib/achievements";
import { cn } from "@/lib/utils";
import { SkeletonList } from "@/components/ui/Skeleton";
import { PageTransition } from "@/components/shared/PageTransition";

function BadgeCard({ badge, earned }: { badge: ReturnType<typeof useAchievements>["badges"][number]; earned: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={earned ? { scale: 1.05 } : undefined}
      className={cn(
        "relative flex flex-col items-center gap-2 p-4 rounded-3xl border text-center transition-all",
        earned
          ? "bg-[var(--color-surface)] border-[var(--color-border)] shadow-card"
          : "bg-[var(--color-bg)] border-[var(--color-border)] opacity-50"
      )}
    >
      {!earned && (
        <div className="absolute top-2 right-2">
          <Lock size={12} className="text-[var(--color-muted)]" />
        </div>
      )}
      <div
        className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-all",
          earned ? "bg-[var(--color-primary-light)]" : "bg-[var(--color-border)] grayscale"
        )}
      >
        {badge.emoji}
      </div>
      <div>
        <p
          className={cn(
            "font-accent text-xs font-bold leading-tight",
            earned ? "text-[var(--color-text-primary)]" : "text-[var(--color-muted)]"
          )}
        >
          {badge.nombre}
        </p>
        {earned && badge.isPremium && (
          <span className="font-accent text-[10px] font-semibold text-[var(--color-accent-gold)] bg-amber-50 px-1.5 py-0.5 rounded-full mt-0.5 inline-block">
            ¡Especial!
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function LogrosPage() {
  const { allProgress, loading } = useDayProgress();
  const { entries }        = useBitacora();
  const { words }          = useWordLog();
  const { badges, earnedCount, totalCount } = useAchievements({
    allProgress,
    bitacoraEntries: entries,
    words,
    hasUsedReinico:  false,
  });

  const byCategory = Object.entries(BADGE_CATEGORIES).map(([key, label]) => ({
    key,
    label,
    badges: badges.filter((b) => b.categoria === key),
  }));

  if (loading) {
    return (
      <div className="space-y-5">
        <div className="h-28 rounded-3xl bg-[var(--color-border)] animate-pulse" />
        <div className="h-10 rounded-2xl bg-[var(--color-border)] animate-pulse" />
        <SkeletonList rows={4} />
      </div>
    );
  }

  return (
    <PageTransition>
    <div className="space-y-6">
      <PageHeader
        title="Tus logros"
        subtitle={`${earnedCount} de ${totalCount} logros desbloqueados. ¡Cada uno representa un momento real!`}
        illustration="/illustrations/celebration.svg"
      />

      {/* Overall progress */}
      <Card elevated>
        <CardContent>
          <div className="flex items-center justify-between mb-2">
            <p className="font-accent text-sm font-semibold text-[var(--color-text-primary)]">
              {earnedCount} logros desbloqueados
            </p>
            <p className="font-accent text-sm text-[var(--color-muted)]">
              {totalCount - earnedCount} por descubrir
            </p>
          </div>
          <Progress value={earnedCount} max={totalCount} size="md" color="gold" />
        </CardContent>
      </Card>

      {/* Badge categories */}
      {byCategory.map(({ key, label, badges: catBadges }) => (
        <div key={key}>
          <h2 className="font-display text-lg font-bold text-[var(--color-text-primary)] mb-3">
            {label}
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {catBadges.map((badge) => (
              <BadgeCard key={badge.id} badge={badge} earned={badge.earned} />
            ))}
          </div>
        </div>
      ))}

      {/* Encouragement */}
      {earnedCount === 0 && (
        <Card className="bg-[var(--color-primary-light)] border-[var(--color-primary)]/20 text-center py-6">
          <CardContent>
            <p className="text-4xl mb-3">🌱</p>
            <p className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
              Tu primer logro te espera
            </p>
            <p className="font-body text-sm text-[var(--color-text-secondary)] mt-1">
              Completa el Día 1 y desbloquea tu primera semilla.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
    </PageTransition>
  );
}
