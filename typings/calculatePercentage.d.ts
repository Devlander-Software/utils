/**
 * Calculates the percentage of a partial value compared to a whole value.
 *
 * @param partial The partial value.
 * @param whole The whole value.
 * @param truncate Optional. If true, truncates the result to an integer.
 * @returns The percentage value.
 * @throws Error if either partial or whole is not a number, or if whole is zero.
 */
export declare function calculatePercentage(partial: number, whole: number, truncate?: boolean): number;
