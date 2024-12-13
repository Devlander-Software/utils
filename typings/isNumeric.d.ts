/**
 * Checks if a value is numeric.
 *
 * This function determines if the provided value is a number or a numeric string.
 * It also checks for floating-point numbers.
 *
 * @param {unknown} n - The value to check.
 * @returns {boolean} - Returns `true` if the value is numeric, otherwise `false`.
 *
 * @example
 * // Returns true
 * isNumeric(123);
 *
 * @example
 * // Returns true
 * isNumeric("123");
 *
 * @example
 * // Returns true
 * isNumeric(1.23);
 *
 * @example
 * // Returns false
 * isNumeric("abc");
 *
 * @example
 * // Returns false
 * isNumeric({});
 *
 * @example
 * // Returns false
 * isNumeric("  123  ");
 */
export declare const isNumeric: (n: unknown) => boolean;
