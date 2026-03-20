"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Plus, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/shared/PageHeader";
import { useBitacora } from "@/hooks/useBitacora";
import { useTodayDay } from "@/hooks/useTodayDay";
import { formatRelativeDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { SkeletonList } from "@/components/ui/Skeleton";
import { PageTransition } from "@/components/shared/PageTransition";
import { toast } from "sonner";

export default function BitacoraPage() {
  const { todayDay }                              = useTodayDay();
  const { entries, loading, saving, saveEntry, toggleStar } = useBitacora();
  const [showForm, setShowForm]                   = useState(false);
  const [obsAdv, setObsAdv]                       = useState("");
  const [connMoment, setConnMoment]               = useState("");
  const [parentFeel, setParentFeel]               = useState("");

  const hasEntryToday = entries.some((e) => e.day_number === todayDay);

  async function handleSave() {
    if (!obsAdv.trim()) {
      toast.error("Cuéntanos al menos un pequeño avance que observaste hoy 💛");
      return;
    }
    const ok = await saveEntry({
      dayNumber:        todayDay,
      observedAdvance:  obsAdv,
      connectionMoment: connMoment || undefined,
      parentFeeling:    parentFeel || undefined,
    });
    if (ok) {
      toast.success("Entrada guardada. Cada palabra que escribes es historia de tu hijo ✨");
      setShowForm(false);
      setObsAdv(""); setConnMoment(""); setParentFeel("");
    }
  }

  if (loading) {
    return (
      <div className="space-y-5">
        <div className="space-y-1">
          <div className="h-7 w-40 rounded-2xl bg-[var(--color-border)] animate-pulse" />
          <div className="h-4 w-64 rounded-xl bg-[var(--color-border)] animate-pulse" />
        </div>
        <SkeletonList rows={3} />
      </div>
    );
  }

  return (
    <PageTransition>
    <div className="space-y-5">
      <PageHeader
        title="Tu Bitácora"
        subtitle="Un espacio solo tuyo para capturar los momentos que importan."
        illustration="/illustrations/journal.svg"
      />

      {/* Add entry CTA */}
      {!hasEntryToday && !showForm && (
        <Button
          fullWidth
          onClick={() => setShowForm(true)}
          className="border-dashed border-2"
          variant="secondary"
        >
          <Plus size={18} />
          Agregar entrada del Día {todayDay}
        </Button>
      )}

      {/* Entry form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <Card elevated>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-accent text-sm font-bold text-[var(--color-text-primary)] mb-1">
                    Día {todayDay} — Entrada de hoy
                  </p>
                </div>
                <div className="space-y-1">
                  <label className="font-accent text-xs font-medium text-[var(--color-text-secondary)]">
                    ¿Qué avance observaste hoy, por pequeño que sea? *
                  </label>
                  <textarea
                    value={obsAdv}
                    onChange={(e) => setObsAdv(e.target.value)}
                    placeholder="Tal vez te miró más tiempo, señaló algo, imitó un sonido..."
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none min-h-[90px] transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-accent text-xs font-medium text-[var(--color-text-secondary)]">
                    ¿Hubo un momento especial de conexión? (opcional)
                  </label>
                  <textarea
                    value={connMoment}
                    onChange={(e) => setConnMoment(e.target.value)}
                    placeholder="Un abrazo, una sonrisa, un juego que los hizo reír juntos..."
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 font-body text-sm placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none min-h-[60px] transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-accent text-xs font-medium text-[var(--color-text-secondary)]">
                    ¿Cómo te sentiste tú hoy? (opcional)
                  </label>
                  <textarea
                    value={parentFeel}
                    onChange={(e) => setParentFeel(e.target.value)}
                    placeholder="Recuerda: tus sentimientos también importan."
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 font-body text-sm placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none min-h-[60px] transition-all"
                  />
                </div>
                <div className="flex gap-3">
                  <Button variant="ghost" onClick={() => setShowForm(false)} fullWidth>
                    Cancelar
                  </Button>
                  <Button onClick={handleSave} isLoading={saving} fullWidth>
                    Guardar entrada
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty state */}
      {!loading && entries.length === 0 && (
        <div className="text-center py-12">
          <BookOpen size={48} className="text-[var(--color-muted)] mx-auto mb-3" />
          <h3 className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
            Tu Bitácora te espera
          </h3>
          <p className="font-body text-sm text-[var(--color-text-secondary)] mt-1 max-w-xs mx-auto">
            Cada pequeño avance que escribas aquí es historia de tu hijo. Empieza hoy.
          </p>
        </div>
      )}

      {/* Skeleton loading */}
      {loading && (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse h-32 rounded-3xl bg-[var(--color-border)]" />
          ))}
        </div>
      )}

      {/* Entry timeline */}
      {!loading && entries.length > 0 && (
        <div className="space-y-4">
          <p className="font-accent text-sm font-semibold text-[var(--color-text-secondary)]">
            {entries.length} entrada{entries.length !== 1 ? "s" : ""} guardada{entries.length !== 1 ? "s" : ""}
          </p>
          {[...entries].reverse().map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card
                elevated
                className={cn(
                  entry.is_weekly_star && "ring-2 ring-[var(--color-accent-gold)] ring-offset-2"
                )}
              >
                <CardContent>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-accent text-xs font-semibold text-[var(--color-muted)] uppercase">
                        Día {entry.day_number}
                      </p>
                      <p className="font-accent text-xs text-[var(--color-muted)]">
                        {formatRelativeDate(entry.entry_date)}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleStar(entry.id, entry.is_weekly_star)}
                      className={cn(
                        "p-1.5 rounded-xl transition-colors",
                        entry.is_weekly_star
                          ? "text-[var(--color-accent-gold)]"
                          : "text-[var(--color-muted)] hover:text-[var(--color-accent-gold)]"
                      )}
                      title={entry.is_weekly_star ? "Quitar estrella" : "Marcar como momento especial"}
                    >
                      <Star
                        size={18}
                        fill={entry.is_weekly_star ? "var(--color-accent-gold)" : "none"}
                      />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="font-accent text-xs font-medium text-[var(--color-primary)] mb-1">
                        Avance observado
                      </p>
                      <p className="font-body text-sm text-[var(--color-text-primary)] leading-relaxed">
                        {entry.observed_advance}
                      </p>
                    </div>
                    {entry.connection_moment && (
                      <div>
                        <p className="font-accent text-xs font-medium text-[var(--color-accent-rose)] mb-1">
                          Momento de conexión
                        </p>
                        <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed">
                          {entry.connection_moment}
                        </p>
                      </div>
                    )}
                    {entry.parent_feeling && (
                      <div>
                        <p className="font-accent text-xs font-medium text-[var(--color-accent-lavender)] mb-1">
                          Tu sentimiento
                        </p>
                        <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed italic">
                          {entry.parent_feeling}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
    </PageTransition>
  );
}
