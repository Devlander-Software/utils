/**
 * Validates whether a given string is a valid hexadecimal color code.
 * The function ensures that the input string matches the format of either
 * a 3, 4, 6, or 8-digit hexadecimal number, optionally prefixed with a `#`.
 *
 * @param hex - The input string to be validated as a hexadecimal color code.
 * @returns `true` if the input string is a valid hexadecimal color code, otherwise `false`.
 *
 * @example
 * ```typescript
 * console.log(isHexColor('#ff0000')); // true
 * console.log(isHexColor('#FFF'));    // true
 * console.log(isHexColor('#12345678')); // true
 * console.log(isHexColor('ff0000'));   // true
 * console.log(isHexColor('#12345'));   // false
 * console.log(isHexColor('#gggggg'));  // false
 * console.log(isHexColor(null));       // false
 * console.log(isHexColor(123 as any)); // false
 * ```
 */
export declare const isHexColor: (hex: string) => boolean;
