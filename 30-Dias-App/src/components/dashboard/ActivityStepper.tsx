"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight, ChevronLeft, Check, Clock, Pause, Play, Plus,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";
import { CelebrationOverlay } from "./CelebrationOverlay";
import { ReinicoConectivoModal } from "./ReinicoConectivo";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { DayContent, Mood } from "@/types/program.types";

type Phase = "conexion" | "juego" | "cierre" | "done";

interface ChecklistState {
  [key: string]: boolean;
}

interface ActivityStepperProps {
  dayContent: DayContent;
  onComplete: (params: {
    checklist:  Record<string, boolean>;
    mood:       Mood;
    phaseTimes: Record<string, number>;
    bitacora:   { observedAdvance: string; connectionMoment?: string; parentFeeling?: string };
  }) => Promise<void>;
}

const PHASE_ORDER: Phase[] = ["conexion", "juego", "cierre", "done"];

const PHASE_META = {
  conexion: { label: "Conexión",      color: "var(--color-accent-lavender)", min: 5 },
  juego:    { label: "Juego Guiado",  color: "var(--color-primary)",         min: 7 },
  cierre:   { label: "Cierre",        color: "var(--color-accent-sage)",      min: 3 },
  done:     { label: "Completado",    color: "var(--color-accent-green)",     min: 0 },
};

function TimerButton({ minutes, onToggle, isRunning }: {
  minutes: number; onToggle: () => void; isRunning: boolean;
}) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!isRunning) return;
    const iv = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(iv);
  }, [isRunning]);

  const total   = minutes * 60;
  const percent = Math.min((elapsed / total) * 100, 100);
  const mins    = Math.floor(elapsed / 60);
  const secs    = elapsed % 60;

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)] font-accent text-xs font-semibold hover:bg-[var(--color-border)] transition-colors"
      >
        {isRunning ? <Pause size={14} /> : <Play size={14} />}
        <Clock size={14} />
        {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")} / {minutes}:00
      </button>
      {isRunning && (
        <div className="flex-1">
          <Progress value={percent} size="sm" color="primary" />
        </div>
      )}
    </div>
  );
}

export function ActivityStepper({ dayContent, onComplete }: ActivityStepperProps) {
  const [phase, setPhase]           = useState<Phase>("conexion");
  const [stepIdx, setStepIdx]       = useState(0);
  const [timerRunning, setTimer]    = useState(false);
  const [checklist, setChecklist]   = useState<ChecklistState>({});
  const [mood, setMood]             = useState<Mood | null>(null);
  const [observedAdv, setObsAdv]    = useState("");
  const [connMoment, setConnMoment] = useState("");
  const [parentFeel, setParentFeel] = useState("");
  const [wordInput, setWordInput]   = useState("");
  const [celebrating, setCelebrating] = useState(false);
  const [reinicoOpen, setReinico]   = useState(false);
  const [saving, setSaving]         = useState(false);

  const phaseIndex = PHASE_ORDER.indexOf(phase);
  const currentPhaseData = phase !== "done"
    ? (phase === "conexion" ? dayContent.faseConexion : phase === "juego" ? dayContent.faseJuego : dayContent.faseCierre)
    : null;
  const steps      = currentPhaseData?.pasos ?? [];
  const isLastStep = stepIdx >= steps.length - 1;

  function nextStep() {
    if (!isLastStep) {
      setStepIdx((s) => s + 1);
    } else {
      const nextPhase = PHASE_ORDER[phaseIndex + 1];
      if (nextPhase) {
        setPhase(nextPhase);
        setStepIdx(0);
        setTimer(false);
      }
    }
  }

  function prevStep() {
    if (stepIdx > 0) {
      setStepIdx((s) => s - 1);
    } else if (phaseIndex > 0) {
      const prevPhase = PHASE_ORDER[phaseIndex - 1];
      setPhase(prevPhase);
      setStepIdx(0);
    }
  }

  async function handleSave() {
    if (!mood) {
      toast.error("¿Cómo fue la sesión? Elige una opción antes de guardar.");
      return;
    }
    if (!observedAdv.trim()) {
      toast.error("Cuéntanos al menos un avance que observaste hoy.");
      return;
    }
    setSaving(true);
    await onComplete({
      checklist,
      mood,
      phaseTimes: {},
      bitacora: {
        observedAdvance:  observedAdv,
        connectionMoment: connMoment || undefined,
        parentFeeling:    parentFeel || undefined,
      },
    });
    setSaving(false);
    setCelebrating(true);
  }


  return (
    <div className="space-y-5">
      {/* Phase progress bar */}
      <div>
        <div className="flex gap-1 mb-3">
          {["conexion", "juego", "cierre"].map((p, i) => {
            const meta = PHASE_META[p as Phase];
            const isActive = p === phase;
            const isDone   = phaseIndex > i;
            return (
              <div key={p} className="flex-1 text-center">
                <div
                  className={cn(
                    "h-1.5 rounded-full mb-1 transition-all duration-500",
                    isDone   && "bg-[var(--color-accent-green)]",
                    isActive && "bg-[var(--color-primary)]",
                    !isDone && !isActive && "bg-[var(--color-border)]"
                  )}
                />
                <p
                  className={cn(
                    "font-accent text-[10px] font-semibold",
                    isActive ? "text-[var(--color-primary)]" : "text-[var(--color-muted)]"
                  )}
                >
                  {meta.label} ({meta.min}min)
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase !== "done" && currentPhaseData && (
          <motion.div
            key={`${phase}-${stepIdx}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            <Card elevated className="min-h-[280px]">
              <CardContent className="space-y-4">
                {/* Phase header */}
                <div>
                  <p
                    className="font-accent text-xs font-bold uppercase tracking-wider mb-1"
                    style={{ color: PHASE_META[phase].color }}
                  >
                    {currentPhaseData.nombre} · Paso {stepIdx + 1} de {steps.length}
                  </p>
                  <p className="font-body text-sm text-[var(--color-text-secondary)]">
                    {currentPhaseData.descripcion}
                  </p>
                </div>

                {/* Current step */}
                <div
                  className="rounded-2xl p-4 border-l-4"
                  style={{ borderColor: PHASE_META[phase].color, backgroundColor: `${PHASE_META[phase].color}10` }}
                >
                  <p className="font-body text-base text-[var(--color-text-primary)] leading-relaxed">
                    {steps[stepIdx]}
                  </p>
                </div>

                {/* All steps mini list */}
                <div className="space-y-1">
                  {steps.map((s, i) => (
                    <div key={i} className={cn("flex items-start gap-2 text-xs font-body", i === stepIdx ? "text-[var(--color-text-primary)]" : i < stepIdx ? "text-[var(--color-accent-green)] line-through opacity-60" : "text-[var(--color-muted)] opacity-50")}>
                      <div className={cn("w-1.5 h-1.5 rounded-full mt-1.5 shrink-0", i < stepIdx ? "bg-[var(--color-accent-green)]" : i === stepIdx ? "bg-[var(--color-primary)]" : "bg-[var(--color-border)]")} />
                      {s}
                    </div>
                  ))}
                </div>

                {currentPhaseData.recordatorio && (
                  <p className="font-body text-xs italic text-[var(--color-text-secondary)] bg-[var(--color-primary-light)] rounded-xl px-3 py-2">
                    💛 {currentPhaseData.recordatorio}
                  </p>
                )}

                {/* Timer toggle */}
                <TimerButton
                  minutes={currentPhaseData.duracionMin}
                  isRunning={timerRunning}
                  onToggle={() => setTimer((r) => !r)}
                />
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Microjuego for juego phase */}
        {phase === "juego" && dayContent.microjuegos.length > 0 && (
          <motion.div
            key="microjuego"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="bg-amber-50 border-amber-200">
              <CardContent>
                <p className="font-accent text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
                  🎯 Truco Pro
                </p>
                <p className="font-body text-sm text-amber-800 leading-relaxed">
                  {dayContent.microjuegos[0].trucoPro}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* END OF SESSION */}
        {phase === "done" && (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
          >
            <div className="text-center py-4">
              <div className="text-5xl mb-3">✨</div>
              <h2 className="font-display text-2xl font-bold text-[var(--color-text-primary)]">
                ¡Sesión completada!
              </h2>
              <p className="font-body text-sm text-[var(--color-text-secondary)] mt-1">
                Dedica 2 minutos a guardar este momento.
              </p>
            </div>

            {/* Checklist */}
            <Card elevated>
              <CardContent className="space-y-3">
                <p className="font-accent text-sm font-semibold text-[var(--color-text-primary)]">
                  ¿Qué pasó hoy?
                </p>
                {dayContent.checklist.map((item) => (
                  <label
                    key={item.id}
                    className={cn(
                      "flex items-start gap-3 cursor-pointer p-3 rounded-2xl transition-colors",
                      checklist[item.id]
                        ? "bg-[var(--color-accent-green)]/10"
                        : "hover:bg-[var(--color-primary-light)]"
                    )}
                  >
                    <div
                      className={cn(
                        "w-5 h-5 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all",
                        checklist[item.id]
                          ? "bg-[var(--color-accent-green)] border-[var(--color-accent-green)]"
                          : "border-[var(--color-border)]"
                      )}
                    >
                      {checklist[item.id] && <Check size={12} strokeWidth={3} className="text-white" />}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={!!checklist[item.id]}
                      onChange={(e) =>
                        setChecklist((c) => ({ ...c, [item.id]: e.target.checked }))
                      }
                    />
                    <div>
                      <p className="font-accent text-sm font-semibold text-[var(--color-text-primary)]">
                        {item.label}
                      </p>
                      <p className="font-body text-xs text-[var(--color-text-secondary)]">
                        {item.descripcion}
                      </p>
                    </div>
                  </label>
                ))}
              </CardContent>
            </Card>

            {/* Mood */}
            <Card elevated>
              <CardContent>
                <p className="font-accent text-sm font-semibold text-[var(--color-text-primary)] mb-3">
                  ¿Cómo fue la sesión de hoy?
                </p>
                <div className="flex gap-3">
                  {([
                    { id: "excelente", emoji: "😄", label: "Excelente" },
                    { id: "bien",      emoji: "😊", label: "Bien" },
                    { id: "dificil",   emoji: "😔", label: "Difícil" },
                  ] as const).map(({ id, emoji, label }) => (
                    <button
                      key={id}
                      onClick={() => setMood(id)}
                      className={cn(
                        "flex-1 flex flex-col items-center gap-1.5 py-3 rounded-2xl border-2 font-accent text-xs font-medium transition-all",
                        mood === id
                          ? "border-[var(--color-primary)] bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                          : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]"
                      )}
                    >
                      <span className="text-2xl">{emoji}</span>
                      {label}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bitácora */}
            <Card elevated>
              <CardContent className="space-y-4">
                <p className="font-accent text-sm font-semibold text-[var(--color-text-primary)]">
                  Tu Bitácora de hoy
                </p>
                <div className="space-y-1">
                  <label className="font-accent text-xs font-medium text-[var(--color-text-secondary)]">
                    ¿Qué avance observaste, por pequeño que sea?
                  </label>
                  <textarea
                    value={observedAdv}
                    onChange={(e) => setObsAdv(e.target.value)}
                    placeholder="Tal vez te miró más tiempo, señaló algo, imitó un sonido..."
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none min-h-[80px] transition-all"
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
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none min-h-[60px] transition-all"
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
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none min-h-[60px] transition-all"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Word log quick add */}
            <Card>
              <CardContent>
                <p className="font-accent text-xs font-semibold text-[var(--color-text-secondary)] mb-2">
                  ¿Nuevo sonido o palabra hoy?
                </p>
                <div className="flex gap-2">
                  <input
                    value={wordInput}
                    onChange={(e) => setWordInput(e.target.value)}
                    placeholder="'ma', 'agua', 'más'..."
                    className="flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => {
                      if (wordInput.trim()) {
                        toast.success(`"${wordInput}" anotado. ¡Cada sonido cuenta!`);
                        setWordInput("");
                      }
                    }}
                  >
                    <Plus size={16} />
                    Agregar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Save CTA */}
            <Button
              fullWidth
              size="lg"
              onClick={handleSave}
              isLoading={saving}
            >
              Guardar y celebrar 🎉
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation buttons for non-done phases */}
      {phase !== "done" && (
        <div className="flex gap-3">
          {phaseIndex > 0 && (
            <Button variant="secondary" onClick={prevStep} size="md">
              <ChevronLeft size={20} />
              Anterior
            </Button>
          )}
          <Button
            variant={isLastStep ? "primary" : "secondary"}
            onClick={nextStep}
            size="md"
            fullWidth
          >
            {isLastStep
              ? phase === "cierre"
                ? "Ir al resumen"
                : `Siguiente fase →`
              : "Siguiente paso"}
            <ChevronRight size={18} />
          </Button>
        </div>
      )}

      {/* Reinicio Conectivo inline button */}
      {phase !== "done" && (
        <button
          onClick={() => setReinico(true)}
          className="w-full text-center font-accent text-xs text-[var(--color-muted)] hover:text-[var(--color-accent-lavender)] py-2 transition-colors"
        >
          ¿Necesitas un momento de pausa? → Reinicio Conectivo
        </button>
      )}

      <ReinicoConectivoModal open={reinicoOpen} onOpenChange={setReinico} />

      <CelebrationOverlay
        open={celebrating}
        onClose={() => { setCelebrating(false); }}
        dayNumber={dayContent.day}
        mensaje={dayContent.fraseMotivacional}
      />
    </div>
  );
}
