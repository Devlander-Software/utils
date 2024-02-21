/**
 * Calculates the percentage of a partial value compared to a whole value.
 *
 * @param partial The partial value.
 * @param whole The whole value.
 * @returns The percentage value.
 * @throws Error if either partial or whole is not a number, or if whole is zero.
 */
export function calculatePercentage(partial: number, whole: number) {
  if (typeof partial !== 'number' || typeof whole !== 'number' || whole === 0) {
    throw new Error("Both inputs must be numbers and 'whole' cannot be zero.")
  }

  const percentage = (partial / whole) * 100
  return percentage
}
