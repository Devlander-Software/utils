import { hexToDecimal } from './hexToDecimals';
import { isValidHex } from './isValidHex';
import { parseHex } from './parseHex';
import { toRgbString } from './toRgbString';

/**
 * Converts a CSS hex color value to an RGB or RGBA color value.
 * @param hex - The hex value to convert. ('123456', '#123456', '123', '#123')
 * @param alpha - An optional alpha value to apply. ('0.5', '0.25')
 * @returns An RGB or RGBA color value. ('rgb(11, 22, 33)', 'rgba(11, 22, 33, 0.5)')
 *
 * @example
 * ```typescript
 * console.log(hexToRgba('#ff0000')); // 'rgba(255, 0, 0, 1)'
 * console.log(hexToRgba('#ff0000', 0.5)); // 'rgba(255, 0, 0, 0.5)'
 * ```
 */
export function hexToRgba(hex: string, alpha: string | number = 1): string {
  if (!isValidHex(hex)) {
    throw new Error('Invalid hex color');
  }

  const hashlessHex = hex.replace(/^#/, '');
  const { r, g, b } = parseHex(hashlessHex);

  if (typeof alpha === 'number' && (alpha < 0 || alpha > 1)) {
    throw new Error('Invalid alpha value');
  }

  const alphaValue = typeof alpha === 'number' ? alpha : isNaN(parseFloat(alpha)) ? 1 : parseFloat(alpha);

  return toRgbString({
    r: hexToDecimal(r),
    g: hexToDecimal(g),
    b: hexToDecimal(b),
    a: alphaValue
  });
}
