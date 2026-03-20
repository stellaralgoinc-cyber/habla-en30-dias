"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Flame, CheckCircle2, Trophy, BookOpen, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { useChildProfile } from "@/hooks/useChildProfile";
import { useDayProgress } from "@/hooks/useDayProgress";
import { useStreak } from "@/hooks/useStreak";
import { useBitacora } from "@/hooks/useBitacora";
import { useWordLog } from "@/hooks/useWordLog";
import { cn } from "@/lib/utils";
import { SkeletonList } from "@/components/ui/Skeleton";
import { PageTransition } from "@/components/shared/PageTransition";

const BarChart      = dynamic(() => import("recharts").then((m) => m.BarChart), { ssr: false });
const Bar           = dynamic(() => import("recharts").then((m) => m.Bar), { ssr: false });
const XAxis         = dynamic(() => import("recharts").then((m) => m.XAxis), { ssr: false });
const YAxis         = dynamic(() => import("recharts").then((m) => m.YAxis), { ssr: false });
const Tooltip       = dynamic(() => import("recharts").then((m) => m.Tooltip), { ssr: false });
const ResponsiveContainer = dynamic(() => import("recharts").then((m) => m.ResponsiveContainer), { ssr: false });

const MOOD_EMOJI: Record<string, string> = {
  excelente: "😄",
  bien:      "😊",
  dificil:   "😔",
};

function ProgressRing({ percent, childName, avatarUrl }: {
  percent: number; childName: string; avatarUrl?: string | null;
}) {
  const r           = 64;
  const circ        = 2 * Math.PI * r;
  const dashOffset  = circ - (percent / 100) * circ;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-40 h-40">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r={r} fill="none" stroke="var(--color-border)" strokeWidth="12" />
          <motion.circle
            cx="80" cy="80" r={r}
            fill="none"
            stroke="var(--color-accent-green)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={{ strokeDashoffset: dashOffset }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
          <Avatar src={avatarUrl} name={childName} size="sm" />
          <span className="font-accent text-xl font-bold text-[var(--color-text-primary)]">
            {percent}%
          </span>
        </div>
      </div>
      <p className="font-body text-sm text-[var(--color-text-secondary)]">
        Vas por buen camino 💛
      </p>
    </div>
  );
}

export default function ProgresoPage() {
  const { profile }                        = useChildProfile();
  const { allProgress, completedCount, loading } = useDayProgress();
  const { current: streak, max: maxStreak } = useStreak();
  const { entries }                        = useBitacora();
  const { words, saving, addWord }         = useWordLog();
  const [wordInput, setWordInput]          = useState("");
  const [wordContext, setWordContext]       = useState("");
  const [showWordForm, setShowWordForm]    = useState(false);

  const percent = Math.round((completedCount / 30) * 100);
  const childName = profile?.child_name ?? "tu hijo";
  const avatarUrl = profile?.avatar_url;

  // Weekly activity data for chart
  const weeklyData = [1, 2, 3, 4].map((week) => {
    const start = (week - 1) * 7 + 1;
    const end   = Math.min(week * 7, 30);
    const count = allProgress.filter(
      (p) => p.day_number >= start && p.day_number <= end
    ).length;
    return { semana: `Sem. ${week}`, días: count };
  });

  const completedDayNums = allProgress.map((p) => p.day_number);

  async function handleAddWord() {
    if (!wordInput.trim()) return;
    const ok = await addWord({ wordOrSound: wordInput, context: wordContext || undefined });
    if (ok) {
      setWordInput(""); setWordContext(""); setShowWordForm(false);
    }
  }

  if (loading) {
    return (
      <div className="space-y-5">
        <div className="h-28 rounded-3xl bg-[var(--color-border)] animate-pulse" />
        <div className="grid grid-cols-2 gap-3">
          {[1,2,3,4].map((i) => <div key={i} className="h-24 rounded-3xl bg-[var(--color-border)] animate-pulse" />)}
        </div>
        <SkeletonList rows={3} />
      </div>
    );
  }

  return (
    <PageTransition>
    <div className="space-y-6">
      <PageHeader
        title="Tu progreso"
        subtitle={`Cada sesión es un paso hacia la primera palabra de ${childName}.`}
        illustration="/illustrations/streak-flame.svg"
      />

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: CheckCircle2, label: "Días completados", value: `${completedCount}/30`,   color: "var(--color-accent-green)" },
          { icon: Flame,        label: "Racha actual",     value: `${streak} días 🔥`,      color: "var(--color-accent-gold)" },
          { icon: Trophy,       label: "Racha máxima",     value: `${maxStreak} días`,       color: "var(--color-primary)" },
          { icon: BookOpen,     label: "Entradas Bitácora",value: `${entries.length}`,       color: "var(--color-accent-lavender)" },
        ].map(({ icon: Icon, label, value, color }) => (
          <Card elevated key={label}>
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
                  <Icon size={16} style={{ color }} />
                </div>
                <p className="font-accent text-xs font-medium text-[var(--color-muted)]">{label}</p>
              </div>
              <p className="font-accent text-xl font-bold text-[var(--color-text-primary)]">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress ring */}
      <Card elevated>
        <CardContent className="flex justify-center py-4">
          <ProgressRing percent={percent} childName={childName} avatarUrl={avatarUrl} />
        </CardContent>
      </Card>

      {/* 30-day heatmap */}
      <Card elevated>
        <CardHeader>
          <CardTitle className="text-base">Días del programa</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
              const progress = allProgress.find((p) => p.day_number === day);
              const isDone   = completedDayNums.includes(day);
              const isMissed = !isDone && day < (allProgress.length > 0 ? Math.max(...completedDayNums, 1) : 1);
              const mood     = progress?.mood as string | null;

              return (
                <div
                  key={day}
                  className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center font-accent text-xs font-bold transition-all",
                    isDone   ? "bg-[var(--color-accent-green)] text-white" :
                    isMissed ? "bg-red-100 text-red-400" :
                               "bg-[var(--color-border)] text-[var(--color-muted)]"
                  )}
                  title={isDone ? `Día ${day} — ${mood ? MOOD_EMOJI[mood] : "✓"}` : `Día ${day}`}
                >
                  {isDone ? (mood ? MOOD_EMOJI[mood] : "✓") : day}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Weekly chart */}
      <Card elevated>
        <CardHeader>
          <CardTitle className="text-base">Actividad semanal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData} margin={{ top: 4, right: 4, bottom: 4, left: -20 }}>
                <XAxis dataKey="semana" tick={{ fontSize: 10, fill: "var(--color-muted)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} domain={[0, 7]} />
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: "1px solid var(--color-border)", fontSize: 12 }}
                  formatter={(v) => [`${v} días`, "Completados"]}
                />
                <Bar dataKey="días" radius={[6, 6, 0, 0]} fill="var(--color-primary)" maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Word log */}
      <Card elevated>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Registro de palabras y sonidos</CardTitle>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowWordForm((v) => !v)}
            >
              <Plus size={14} />
              Agregar
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {showWordForm && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2 p-3 bg-[var(--color-bg)] rounded-2xl border border-[var(--color-border)]"
            >
              <input
                value={wordInput}
                onChange={(e) => setWordInput(e.target.value)}
                placeholder="'ma', 'agua', 'guau'..."
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <input
                value={wordContext}
                onChange={(e) => setWordContext(e.target.value)}
                placeholder="¿Cuándo o dónde sucedió? (opcional)"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <Button size="sm" fullWidth onClick={handleAddWord} isLoading={saving}>
                Guardar
              </Button>
            </motion.div>
          )}

          {words.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-3xl mb-2">💬</p>
              <p className="font-body text-sm text-[var(--color-text-secondary)]">
                Aquí aparecerán las primeras palabras y sonidos de {childName}.
              </p>
              <p className="font-body text-xs text-[var(--color-muted)] mt-1">
                Cada sonido que anotes es historia de tu hijo.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {words.length === 1 && (
                <div className="flex items-center gap-2 p-3 bg-[var(--color-accent-gold)]/10 rounded-2xl border border-[var(--color-accent-gold)]/30 mb-3">
                  <span className="text-2xl">🎊</span>
                  <p className="font-accent text-sm font-semibold text-[var(--color-text-primary)]">
                    ¡Primera palabra registrada!
                  </p>
                </div>
              )}
              {words.map((word) => (
                <div
                  key={word.id}
                  className={cn(
                    "flex items-start gap-3 p-3 rounded-2xl border",
                    word.is_first_word
                      ? "bg-[var(--color-accent-gold)]/5 border-[var(--color-accent-gold)]/30"
                      : "bg-[var(--color-bg)] border-[var(--color-border)]"
                  )}
                >
                  <span className="text-xl">
                    {word.is_first_word ? "⭐" : "💬"}
                  </span>
                  <div>
                    <p className="font-accent text-sm font-bold text-[var(--color-text-primary)]">
                      &ldquo;{word.word_or_sound}&rdquo;
                    </p>
                    {word.context && (
                      <p className="font-body text-xs text-[var(--color-text-secondary)]">
                        {word.context}
                      </p>
                    )}
                    <p className="font-body text-xs text-[var(--color-muted)]">
                      {word.logged_at}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
    </PageTransition>
  );
}
