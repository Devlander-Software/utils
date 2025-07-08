/**
 * Formats a number with comma separators for thousands.
 *
 * @param num - The number to format.
 * @returns The formatted number string with commas.
 *
 * @example
 * ```typescript
 * formatNumberWithCommas(1000); // Returns: "1,000"
 * formatNumberWithCommas(1234567); // Returns: "1,234,567"
 * formatNumberWithCommas(100); // Returns: "100"
 * formatNumberWithCommas(1000.5); // Returns: "1,000.5"
 * ```
 */
export const formatNumberWithCommas = (num: number): string => {
  if (typeof num !== "number" || isNaN(num)) {
    return "0";
  }

  return num.toLocaleString("en-US");
};
