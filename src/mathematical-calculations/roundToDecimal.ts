/**
 * Rounds a number to a specified number of decimal places.
 *
 * @param num - The number to round.
 * @param decimals - The number of decimal places to round to. Defaults to 0.
 * @returns The rounded number.
 *
 * @example
 * ```typescript
 * roundToDecimal(3.14159, 2); // Returns: 3.14
 * roundToDecimal(3.14159, 0); // Returns: 3
 * roundToDecimal(3.5); // Returns: 4
 * roundToDecimal(3.4); // Returns: 3
 * ```
 */
export const roundToDecimal = (num: number, decimals: number = 0): number => {
  if (typeof num !== "number" || isNaN(num)) {
    return 0;
  }

  if (typeof decimals !== "number" || decimals < 0) {
    decimals = 0;
  }

  const factor = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
};
