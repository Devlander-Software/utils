import { HexObject } from './parseHex';
/**
 * Converts a hexadecimal string to a decimal number.
 * @param hex - The hexadecimal string to convert.
 * @returns The decimal number.
 *
 * @example
 * ```typescript
 * console.log(hexToDecimal('ff')); // 255
 * console.log(hexToDecimal('0a')); // 10
 * ```
 */
export const hexToDecimal = (hex: string): number => {
    return parseInt(hex, 16);
  };
  
export interface HexDecimalObject {
  r: number;
  g: number;
  b: number;
  a: number;
}

/**
 * Converts a HexObject to a HexDecimalObject by converting each hex value to its decimal equivalent.
 * @param hexObj - The object containing hex values for r, g, b, and a.
 * @returns An object containing decimal values for r, g, b, and a.
 *
 * @example
 * ```typescript
 * const hexObj = { r: 'ff', g: '00', b: '00', a: '80' };
 * console.log(hexesToDecimals(hexObj)); // { r: 255, g: 0, b: 0, a: 0.5 }
 * ```
 */
export const hexesToDecimals = ({ r, g, b, a }: HexObject): HexDecimalObject => {
  return {
    r: hexToDecimal(r),
    g: hexToDecimal(g),
    b: hexToDecimal(b),
    a: +(hexToDecimal(a) / 255).toFixed(2),
  };
};
