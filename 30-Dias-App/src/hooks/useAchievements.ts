"use client";

import { useMemo } from "react";
import type { DayProgress, BitacoraEntry, WordLog, Achievement } from "@/types/database.types";
import { BADGES } from "@/lib/achievements";
import { calculateStreak } from "@/lib/utils";
import { format, parseISO } from "date-fns";

interface UseAchievementsParams {
  allProgress:   DayProgress[];
  bitacoraEntries: BitacoraEntry[];
  words:         WordLog[];
  unlockedBadges: Achievement[];
  hasUsedReinico: boolean;
}

export function computeUnlockedBadgeIds({
  allProgress,
  bitacoraEntries,
  words,
  hasUsedReinico,
}: Omit<UseAchievementsParams, "unlockedBadges">): Set<string> {
  const ids = new Set<string>();
  const completedDays = allProgress.map((p) => p.day_number);

  // CONEXIÓN
  if (completedDays.includes(1))                              ids.add("primera-semilla");
  if (completedDays.filter((d) => d >= 1 && d <= 7).length >= 5) ids.add("mirada-profunda");
  if ([1,2,3,4,5,6,7].every((d) => completedDays.includes(d))) ids.add("primer-vinculo");

  // JUEGO
  if (completedDays.includes(3) && completedDays.includes(8))  ids.add("tesoro-sonoro");
  if (completedDays.includes(5))                               ids.add("carrera-campeona");
  if ([8,9,10,11,12,13,14].every((d) => completedDays.includes(d))) ids.add("maestra-del-juego");

  // PALABRAS
  if (words.length >= 1)                                       ids.add("primer-sonido");
  if (words.some((w) => w.is_first_word))                      ids.add("primera-palabra");
  if (completedDays.includes(4) && completedDays.filter((d) => d >= 15 && d <= 21).length >= 3)
                                                               ids.add("eco-perfecto");

  // CONSTANCIA — streak
  const dates = allProgress.map((p) => format(parseISO(p.completed_at), "yyyy-MM-dd"));
  const streak = calculateStreak(Array.from(new Set(dates)));
  if (streak >= 3)  ids.add("tres-dias");
  if (streak >= 7)  ids.add("siete-dias");
  if (streak >= 14) ids.add("catorce-dias");
  if (completedDays.length === 30) ids.add("treinta-dias");

  // BITÁCORA
  if (bitacoraEntries.length >= 1)                             ids.add("primera-entrada");
  // 7 consecutive entries
  if (bitacoraEntries.length >= 7) {
    const sortedDays = bitacoraEntries.map((e) => e.day_number).sort((a, b) => a - b);
    let consec = 1; let maxConsec = 1;
    for (let i = 1; i < sortedDays.length; i++) {
      consec = sortedDays[i] === sortedDays[i-1] + 1 ? consec + 1 : 1;
      maxConsec = Math.max(maxConsec, consec);
    }
    if (maxConsec >= 7) ids.add("observadora-activa");
  }
  if (bitacoraEntries.filter((e) => e.is_weekly_star).length >= 5)
                                                               ids.add("guardadora-momentos");

  // RESILIENCIA
  if (hasUsedReinico)                                          ids.add("reinicio-conectivo");
  if (allProgress.some((p) => p.mood === "dificil"))           ids.add("dia-dificil");
  // Completed after a missed day
  const sortedDayNums = completedDays.sort((a,b) => a-b);
  for (let i = 1; i < sortedDayNums.length; i++) {
    if (sortedDayNums[i] > sortedDayNums[i-1] + 1) {
      ids.add("constancia-con-amor");
      break;
    }
  }

  return ids;
}

export function useAchievements({
  allProgress,
  bitacoraEntries,
  words,
  hasUsedReinico,
}: Omit<UseAchievementsParams, "unlockedBadges">) {
  const earnedIds = useMemo(
    () => computeUnlockedBadgeIds({ allProgress, bitacoraEntries, words, hasUsedReinico }),
    [allProgress, bitacoraEntries, words, hasUsedReinico]
  );

  const badges = useMemo(
    () =>
      BADGES.map((badge) => ({
        ...badge,
        earned: earnedIds.has(badge.id),
      })),
    [earnedIds]
  );

  return { badges, earnedCount: earnedIds.size, totalCount: BADGES.length };
}
