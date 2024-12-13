/**
 * Removes all spaces from a given string.
 * @param inputString - The string from which to remove spaces.
 * @returns The input string with all spaces removed.
 */
export const removeSpacesFromString = (inputString: string): string => {
  return inputString.replace(/\s+/g, '')
}
