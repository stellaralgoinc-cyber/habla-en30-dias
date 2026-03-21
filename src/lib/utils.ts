import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { differenceInCalendarDays, format, parseISO, isToday, isYesterday } from "date-fns";
import { es } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date, pattern = "d 'de' MMMM, yyyy"): string {
  const d = typeof date === "string" ? parseISO(date) : date;
  return format(d, pattern, { locale: es });
}

export function formatRelativeDate(date: string | Date): string {
  const d = typeof date === "string" ? parseISO(date) : date;
  if (isToday(d)) return "Hoy";
  if (isYesterday(d)) return "Ayer";
  return format(d, "d 'de' MMMM", { locale: es });
}

export function calculateStreak(completedDates: string[]): number {
  if (completedDates.length === 0) return 0;

  const sorted = [...completedDates]
    .map((d) => parseISO(d))
    .sort((a, b) => b.getTime() - a.getTime());

  const today = new Date();
  let streak = 0;
  let cursor = today;

  for (const date of sorted) {
    const diff = differenceInCalendarDays(cursor, date);
    if (diff === 0 || diff === 1) {
      streak++;
      cursor = date;
    } else {
      break;
    }
  }

  return streak;
}

export function getWeekNumber(dayNumber: number): number {
  return Math.ceil(dayNumber / 7);
}

export function getProgramDay(startedAt: string): number {
  // Strip any time/timezone component so the comparison is always date-only
  // in the user's local timezone. This avoids UTC-offset bugs where
  // "2026-03-21T06:00:00Z" parses to March 20 in UTC-6, making day 1 appear as day 2.
  const dateOnly = startedAt.split("T")[0];
  const start = parseISO(dateOnly);
  const diff = differenceInCalendarDays(new Date(), start) + 1;
  return Math.min(Math.max(diff, 1), 30);
}

export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Buenos días";
  if (hour < 18) return "Buenas tardes";
  return "Buenas noches";
}
