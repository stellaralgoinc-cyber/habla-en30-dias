export type DayState = "locked" | "available" | "completed" | "missed";

/**
 * Determines the display/interaction state of a calendar day.
 *
 * @param day           - The day number (1–30) being evaluated
 * @param todayDay      - The current program day for this user
 * @param completedDays - Array of day numbers the user has completed
 */
export function getDayState(
  day: number,
  todayDay: number,
  completedDays: number[]
): DayState {
  if (completedDays.includes(day)) return "completed";
  if (day === todayDay) return "available";
  if (day < todayDay) return "missed";
  return "locked";
}
