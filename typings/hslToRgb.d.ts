/**
 * Converts HSL (Hue, Saturation, Lightness) color values to RGB (Red, Green, Blue) color values.
 * @param h - The hue value (0-360).
 * @param s - The saturation value (0-100).
 * @param l - The lightness value (0-100).
 * @returns An array containing the RGB color values.
 */
export declare const hslToRgb: (h: number, s: number, l: number) => [number, number, number];
