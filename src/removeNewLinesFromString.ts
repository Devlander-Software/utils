// removeNewLinesFromString.ts
/**
 * Removes all new line characters from a given string.
 * @param inputString - The input string to remove new lines from.
 * @returns The input string with all new lines removed.
 */
export const removeNewLinesFromString = (inputString: string): string => inputString.replace(/\n/g, "");
