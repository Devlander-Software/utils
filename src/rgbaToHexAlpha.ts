/**
 * Converts an RGBA or RGB string to a hexadecimal color value with optional alpha channel.
 * @param rgba - The RGBA or RGB string to convert.
 * @param forceRemoveAlpha - Whether to remove the alpha channel from the resulting hexadecimal color value. Default is false.
 * @returns The hexadecimal color value.
 * @throws Error if the input RGBA/RGB string is invalid.
 */
export const RGBAToHexAlpha = (rgba: string, forceRemoveAlpha = false) => {
  // Extracts numbers from the rgba/rgb string
  const numbers = rgba.match(/\d+\.?\d*/g)?.map(Number);

  if (!numbers) {
    throw new Error("Invalid RGBA/RGB input");
  }

  // Convert the RGBA values to hex
  const hexValues = numbers.map((num, idx) => {
    // Convert alpha from [0,1] to [0,255] if it's the fourth value
    if (idx === 3) num = Math.round(num * 255);

    const hex = num.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  });

  // If forceRemoveAlpha is true, remove the alpha value
  if (forceRemoveAlpha && hexValues.length === 4) {
    hexValues.pop();
  }

  return "#" + hexValues.join("");
};
