import { describe, it, expect } from "vitest";
import { getDayState } from "../day-utils";

describe("getDayState", () => {
  const completedDays = [1, 2, 3];

  it("returns 'completed' when the day is in completedDays", () => {
    expect(getDayState(1, 4, completedDays)).toBe("completed");
    expect(getDayState(3, 4, completedDays)).toBe("completed");
  });

  it("returns 'available' when day equals todayDay and not yet completed", () => {
    expect(getDayState(4, 4, completedDays)).toBe("available");
  });

  it("returns 'available' for today even with no completed days", () => {
    expect(getDayState(1, 1, [])).toBe("available");
  });

  it("returns 'missed' for a past day that is not completed", () => {
    expect(getDayState(3, 5, [1, 2])).toBe("missed");
    expect(getDayState(4, 5, [1, 2])).toBe("missed");
  });

  it("returns 'locked' for future days beyond todayDay", () => {
    expect(getDayState(10, 4, completedDays)).toBe("locked");
    expect(getDayState(30, 1, [])).toBe("locked");
  });

  it("'completed' takes priority over 'available'", () => {
    // If todayDay is 3 but day 3 is already completed
    expect(getDayState(3, 3, [1, 2, 3])).toBe("completed");
  });

  it("handles day 1 on day 1 with nothing completed", () => {
    expect(getDayState(1, 1, [])).toBe("available");
  });

  it("handles all 30 days locked when program just started on day 1", () => {
    for (let d = 2; d <= 30; d++) {
      expect(getDayState(d, 1, [])).toBe("locked");
    }
  });

  it("handles completed days out of order in the array", () => {
    expect(getDayState(5, 8, [5, 1, 3])).toBe("completed");
  });
});
