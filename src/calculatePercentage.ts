/**
 * Calculates the percentage of a partial value compared to a whole value.
 *
 * @param partial The partial value.
 * @param whole The whole value.
 * @param truncate Optional. If true, truncates the result to an integer.
 * @returns The percentage value.
 * @throws Error if either partial or whole is not a number, or if whole is zero.
 */
export function calculatePercentage(
  partial: number,
  whole: number,
  truncate: boolean = false,
): number {
  if (typeof partial !== "number" || typeof whole !== "number" || whole === 0) {
    throw new Error("Both inputs must be numbers and 'whole' cannot be zero.");
  }

  const percentage = (partial / whole) * 100;
  return truncate ? Math.trunc(percentage) : percentage;
}
