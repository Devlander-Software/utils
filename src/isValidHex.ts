/**
 * Validates whether a given string is a valid hexadecimal color code.
 * The function ensures that the input string matches the format of either
 * a 3, 6, or 8-digit hexadecimal number, optionally prefixed with a `#`.
 *
 * @param hex - The input string to be validated as a hexadecimal color code.
 * @returns `true` if the input string is a valid hexadecimal color code, otherwise `false`.
 *
 * @example
 * ```typescript
 * console.log(isValidHex('#ff0000')); // true
 * console.log(isValidHex('ff0000'));  // true
 * console.log(isValidHex('#FFF'));    // true
 * console.log(isValidHex('FFF'));     // true
 * console.log(isValidHex('#12345678')); // true
 * console.log(isValidHex('12345678'));  // true
 * console.log(isValidHex('#12345'));   // false
 * console.log(isValidHex('#gggggg'));  // false
 * console.log(isValidHex(null));       // false
 * console.log(isValidHex(123 as any)); // false
 * ```
 *
 * @remarks
 * The `isValidHex` function is used in various scenarios where hexadecimal color validation is needed,
 * such as in functions like `hexToBinary` and `hexToRgba`. It ensures that only valid hexadecimal
 * color codes are processed, preventing errors and unexpected behavior.
 */
export const isValidHex = (hex: string): boolean => {
  console.log(`Testing hex: ${hex}`); // Debugging log
  if (typeof hex !== 'string') return false;
  const hexPattern = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
  const result = hexPattern.test(hex);
  console.log(`Result for ${hex}: ${result}`); // Debugging log
  return result;
};
