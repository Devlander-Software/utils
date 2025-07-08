/**
 * Capitalizes the first letter of a string.
 *
 * ✅ Works in Node.js, React, and React Native.
 *
 * @example
 * capitalize("hello world") // "Hello world"
 * capitalize("WORLD") // "WORLD"
 * capitalize("") // ""
 *
 * @param str - The input string to capitalize
 * @returns A new string with the first letter capitalized
 */
export const capitalize = (str: string): string => {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
};
