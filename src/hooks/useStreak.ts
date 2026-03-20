"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { calculateStreak } from "@/lib/utils";
import { parseISO, format } from "date-fns";

export interface StreakData {
  current: number;
  max:     number;
  dates:   string[];
}

export function useStreak() {
  const [data, setData]     = useState<StreakData>({ current: 0, max: 0, dates: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    async function load() {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setLoading(false); return; }

      const { data: progress } = await supabase
        .from("day_progress")
        .select("completed_at")
        .eq("user_id", user.id)
        .order("completed_at", { ascending: true });

      if (!progress) { setLoading(false); return; }

      const uniqueDates = Array.from(
        new Set(
          progress.map((p) => format(parseISO(p.completed_at), "yyyy-MM-dd"))
        )
      );

      const current = calculateStreak(uniqueDates);

      let maxStreak = 0;
      let tempStreak = 1;
      const sorted = [...uniqueDates].sort();

      for (let i = 1; i < sorted.length; i++) {
        const prev = parseISO(sorted[i - 1]);
        const curr = parseISO(sorted[i]);
        const diff = Math.round((curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24));
        if (diff === 1) {
          tempStreak++;
          maxStreak = Math.max(maxStreak, tempStreak);
        } else {
          tempStreak = 1;
        }
      }
      maxStreak = Math.max(maxStreak, tempStreak, current);

      setData({ current, max: maxStreak, dates: uniqueDates });
      setLoading(false);
    }
    load();
  }, []);

  return { ...data, loading };
}
