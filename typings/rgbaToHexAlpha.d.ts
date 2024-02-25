/**
 * Converts an RGBA or RGB string to a hexadecimal color value with optional alpha channel.
 * @param rgba - The RGBA or RGB string to convert.
 * @param forceRemoveAlpha - Whether to remove the alpha channel from the resulting hexadecimal color value. Default is false.
 * @returns The hexadecimal color value.
 * @throws Error if the input RGBA/RGB string is invalid.
 */
export declare const RGBAToHexAlpha: (rgba: string, forceRemoveAlpha?: boolean) => string;
