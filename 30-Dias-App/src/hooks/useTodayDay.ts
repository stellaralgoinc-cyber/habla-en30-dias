"use client";

import { useMemo } from "react";
import { getProgramDay } from "@/lib/utils";
import { useChildProfile } from "./useChildProfile";

export function useTodayDay() {
  const { profile, loading } = useChildProfile();

  const todayDay = useMemo(() => {
    if (!profile?.started_program_at) return 1;
    return getProgramDay(profile.started_program_at);
  }, [profile?.started_program_at]);

  return { todayDay, loading, profile };
}
