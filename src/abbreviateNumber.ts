/**
 * Options for formatting the abbreviated number's suffix.
 */
export interface AbbreviateOptions {
  /**
   * Specifies the case of the suffix. Accepts 'lower' for lowercase or 'upper' for uppercase.
   * If not provided, the suffix defaults to uppercase.
   */
  case?: "lower" | "upper";
  /**
   * Specifies the rounding method. Accepts 'up' for rounding up, 'down' for rounding down, 'none' for no rounding.
   * If not provided, the default is 'none'.
   */
  rounding?: 'up' | 'down' | 'none';
}

/**
 * Enum for suffixes used in number abbreviation.
 */
export enum AbbreviateNumberSuffix {
  NONE = "",
  K = "K",
  M = "M",
  B = "B",
  T = "T",
  P = "P",
  E = "E",
}

/**
 * Abbreviates a number to a more readable format using suffixes for thousands (K), millions (M), billions (B), and larger values.
 * The function can handle both number and string inputs, and provides an option to format the suffix in lowercase or uppercase.
 *
 * @param value - The number or string to be abbreviated. If the value is `undefined`, the function returns an empty string.
 * If the value cannot be converted to a number, the function returns 'Invalid input'.
 * @param options - An optional parameter to specify the formatting options for the suffix.
 * @returns The abbreviated number with an appropriate suffix or an error message if the input is invalid.
 *
 * @example
 * ```typescript
 * // Basic usage with number input
 * abbreviateNumber(123);              // "123"
 * abbreviateNumber(1234);             // "1.2K"
 * abbreviateNumber(1234567);          // "1.2M"
 * abbreviateNumber(1234567890);       // "1.2B"
 *
 * // Basic usage with string input
 * abbreviateNumber("1234567890123");  // "1.2T"
 *
 * // Using options to format the suffix in lowercase
 * abbreviateNumber(1234567, { case: 'lower' }); // "1.2m"
 *
 * // Using options to format the suffix in uppercase
 * abbreviateNumber(1234567, { case: 'upper' }); // "1.2M"
 *
 * // Handling undefined input
 * abbreviateNumber(undefined);        // ""
 *
 * // Handling invalid input
 * abbreviateNumber("invalid input");  // "Invalid input"
 * ```
 */
export const abbreviateNumber = (
  value: string | number | undefined,
  options?: AbbreviateOptions,
): string => {
  const suffixes: AbbreviateNumberSuffix[] = [
    AbbreviateNumberSuffix.NONE,
    AbbreviateNumberSuffix.K,
    AbbreviateNumberSuffix.M,
    AbbreviateNumberSuffix.B,
    AbbreviateNumberSuffix.T,
    AbbreviateNumberSuffix.P,
    AbbreviateNumberSuffix.E,
  ];

  // Handle undefined input
  if (value === undefined) {
    return "";
  }

  // Convert string input to number
  let num = typeof value === "string" ? parseFloat(value) : value;

  // Handle invalid input
  if (isNaN(num)) {
    return "Invalid input";
  }

  // Determine the tier of the number
  const tier = (Math.log10(Math.abs(num)) / 3) | 0;

  // If the tier is 0, return the number as is
  if (tier === 0) return num.toString();

  // Get the appropriate suffix
  let suffix: AbbreviateNumberSuffix = suffixes[tier];
  const scale = Math.pow(10, tier * 3);

  // Scale the number
  let scaled = num / scale;

  // Apply rounding if needed
  if (options?.rounding) {
    switch (options.rounding) {
      case "up":
        scaled = Math.ceil(scaled * 10) / 10;
        break;
      case "down":
        scaled = Math.floor(scaled * 10) / 10;
        break;
      case "none":
      default:
        // No rounding
        break;
    }
  }

  // Handle suffix case options
  if (options?.case === "lower") {
    suffix = suffix.toLowerCase() as AbbreviateNumberSuffix;
  } else if (options?.case === "upper") {
    suffix = suffix.toUpperCase() as AbbreviateNumberSuffix;
  }

  return scaled.toFixed(1) + suffix;
};
