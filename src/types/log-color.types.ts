/**
 * Enum representing text and background color options.
 *
 * @enum {string}
 * @property {string} green - Green text color.
 * @property {string} red - Red text color.
 * @property {string} blue - Blue text color.
 * @property {string} yellow - Yellow text color.
 * @property {string} magenta - Magenta text color.
 * @property {string} bgGreen - Green background color with white text.
 * @property {string} bgRed - Red background color with white text.
 * @property {string} bgBlue - Blue background color with white text.
 * @property {string} reset - Resets formatting to default.
 */
export enum TColor {
  green = "green",
  red = "red",
  blue = "blue",
  yellow = "yellow",
  magenta = "magenta",
  bgGreen = "bgGreen",
  bgRed = "bgRed",
  bgBlue = "bgBlue",
  reset = "reset",
}

/**
 * Type representing valid values of the TColor enum.
 *
 * This type includes both text and background color options.
 */
export type TColorValue = keyof typeof TColor;
