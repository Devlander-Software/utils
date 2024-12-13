import { isNumber } from './isNumber'

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
export const isNumeric = (n: unknown): boolean => {
  if (typeof n === 'string') {
    // Check if the string is empty or has any leading or trailing spaces
    if (n.trim() === '' || n.trim() !== n) {
      return false
    }
    // Check if the trimmed value is numeric
    return !isNaN(Number(n)) && isFinite(Number(n))
  } else if (typeof n === 'number') {
    // Check if it's a valid number and not NaN
    return !isNaN(n) && isFinite(n)
  }
  return isNumber(n)
}
