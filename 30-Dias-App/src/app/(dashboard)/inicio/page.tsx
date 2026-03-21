"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, TrendingUp, Award } from "lucide-react";
import { TodayHero } from "@/components/dashboard/TodayHero";
import { StreakDisplay } from "@/components/dashboard/StreakDisplay";
import { MoodCheckin } from "@/components/dashboard/MoodCheckin";
import { CelebrationOverlay } from "@/components/dashboard/CelebrationOverlay";
import { Card, CardContent } from "@/components/ui/Card";
import { useChildProfile } from "@/hooks/useChildProfile";
import { useTodayDay } from "@/hooks/useTodayDay";
import { useDayProgress } from "@/hooks/useDayProgress";
import { useStreak } from "@/hooks/useStreak";
import { getDayContent } from "@/lib/program-data";
import { getGreeting } from "@/lib/utils";
import { SkeletonDashboard } from "@/components/ui/Skeleton";
import { PageTransition } from "@/components/shared/PageTransition";
import type { Mood } from "@/types/program.types";

const QUICK_LINKS = [
  { href: "/bitacora",   label: "Bitácora",  icon: BookOpen,  color: "var(--color-accent-lavender)" },
  { href: "/progreso",   label: "Progreso",  icon: TrendingUp, color: "var(--color-accent-sky)" },
  { href: "/logros",     label: "Logros",    icon: Award,      color: "var(--color-accent-gold)" },
] as const;

export default function InicioPage() {
  const { profile }                         = useChildProfile();
  const { todayDay }                        = useTodayDay();
  const { completedDays, completeDay }      = useDayProgress(todayDay);
  const { current: streak }                = useStreak();
  const [celebrating, setCelebrating]      = useState(false);

  const dayContent    = getDayContent(todayDay);
  const isTodayDone   = completedDays.includes(todayDay);
  const greeting      = getGreeting();
  const childName     = profile?.child_name ?? "tu hijo";
  const nextDayContent = getDayContent(Math.min(todayDay + 1, 30));

  async function handleMoodSelect(mood: Mood) {
    // Save mood to the current day's progress (or yesterday's)
    await completeDay({ day: Math.max(todayDay - 1, 1), mood });
  }

  if (!dayContent) {
    return <SkeletonDashboard />;
  }

  return (
    <PageTransition>
    <div className="space-y-5">
      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-body text-[var(--color-text-secondary)] text-sm">
          {greeting}
        </p>
        <h1 className="font-display text-2xl font-bold text-[var(--color-text-primary)] mt-0.5">
          Día {todayDay} con{" "}
          <span className="text-[var(--color-primary)]">{childName}</span> 🌻
        </h1>
      </motion.div>

      {/* Streak */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <StreakDisplay streak={streak} />
      </motion.div>

      {/* Today Hero */}
      <TodayHero
        dayContent={dayContent}
        childName={childName}
        isCompleted={isTodayDone}
      />

      {/* Mood check-in (if yesterday has no mood and today > 1) */}
      {todayDay > 1 && !completedDays.includes(todayDay - 1) && (
        <MoodCheckin
          dayNumber={todayDay}
          onSelect={handleMoodSelect}
        />
      )}

      {/* Motivational quote */}
      <Card className="bg-[var(--color-primary-light)] border-[var(--color-primary)]/20">
        <CardContent>
          <p className="font-display text-base italic text-[var(--color-text-secondary)] leading-relaxed">
            &ldquo;{dayContent.fraseMotivacional}&rdquo;
          </p>
        </CardContent>
      </Card>

      {/* Completed state: tomorrow preview */}
      {isTodayDone && nextDayContent && todayDay < 30 && (
        <Card elevated>
          <CardContent>
            <p className="font-accent text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-2">
              Mañana
            </p>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-display font-semibold text-[var(--color-text-primary)]">
                  {nextDayContent.titulo}
                </p>
                <p className="font-body text-sm text-[var(--color-text-secondary)]">
                  {nextDayContent.subtitulo}
                </p>
              </div>
              <ArrowRight size={20} className="text-[var(--color-muted)] shrink-0" />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick links */}
      <div className="grid grid-cols-3 gap-3">
        {QUICK_LINKS.map(({ href, label, icon: Icon, color }) => (
          <Link key={href} href={href}>
            <Card className="text-center py-4 px-2 hover:shadow-warm transition-all duration-200 cursor-pointer">
              <CardContent>
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center mx-auto mb-2"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <p className="font-accent text-xs font-semibold text-[var(--color-text-secondary)]">
                  {label}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <CelebrationOverlay
        open={celebrating}
        onClose={() => setCelebrating(false)}
        dayNumber={todayDay}
        mensaje={dayContent.fraseMotivacional}
      />
    </div>
    </PageTransition>
  );
}
