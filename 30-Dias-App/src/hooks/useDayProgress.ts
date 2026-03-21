"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { DayProgress } from "@/types/database.types";
import type { Mood } from "@/types/program.types";
import { toast } from "sonner";

export function useDayProgress(dayNumber?: number) {
  const [progress, setProgress]   = useState<DayProgress | null>(null);
  const [allProgress, setAll]     = useState<DayProgress[]>([]);
  const [loading, setLoading]     = useState(true);
  const [saving, setSaving]       = useState(false);

  const load = useCallback(async () => {
    const supabase = createClient();
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setLoading(false); return; }

    const { data: all } = await supabase
      .from("day_progress")
      .select("*")
      .eq("user_id", user.id);
    setAll(all ?? []);

    if (dayNumber) {
      const dayData = all?.find((p) => p.day_number === dayNumber) ?? null;
      setProgress(dayData);
    }

    setLoading(false);
  }, [dayNumber]);

  useEffect(() => { load(); }, [load]);

  async function completeDay(params: {
    day:        number;
    checklist?: Record<string, boolean>;
    mood?:      Mood;
    phaseTimes?: { conexion_min?: number; juego_min?: number; cierre_min?: number };
  }) {
    const supabase = createClient();
    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setSaving(false); return false; }

    const { data, error } = await supabase
      .from("day_progress")
      .upsert(
        {
          user_id:      user.id,
          day_number:   params.day,
          completed_at: new Date().toISOString(),
          checklist:    params.checklist ?? {},
          mood:         params.mood ?? null,
          phase_times:  params.phaseTimes ?? {},
        },
        { onConflict: "user_id,day_number" }
      )
      .select()
      .single();

    setSaving(false);

    if (error) {
      toast.error("No pudimos guardar tu progreso. Intenta de nuevo.");
      return false;
    }

    setProgress(data);
    await load();
    return true;
  }

  const completedDays  = allProgress.map((p) => p.day_number);
  const completedCount = completedDays.length;

  return {
    progress,
    allProgress,
    completedDays,
    completedCount,
    loading,
    saving,
    completeDay,
    reload: load,
  };
}
