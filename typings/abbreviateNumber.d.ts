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
    rounding?: "up" | "down" | "none";
}
/**
 * Enum for suffixes used in number abbreviation.
 */
export declare enum AbbreviateNumberSuffix {
    NONE = "",
    K = "K",
    M = "M",
    B = "B",
    T = "T",
    P = "P",
    E = "E"
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
export declare const abbreviateNumber: (value: string | number | undefined, options?: AbbreviateOptions) => string;
