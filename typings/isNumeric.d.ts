/**
 * Checks if a value is numeric.
 *
 * This function determines if the provided value is a number or a numeric string.
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
 * // Returns false
 * isNumeric("abc");
 *
 * @example
 * // Returns false
 * isNumeric({});
 */
export declare const isNumeric: (n: unknown) => boolean;
