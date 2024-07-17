/**
 * Checks if a string is a valid JSON by attempting to parse it.
 * @param str The string to check.
 * @returns Returns the parsed JSON object if the string is valid JSON, otherwise returns false.
 */
export const isJson = (
  value: string | object,
): Record<string, unknown> | boolean => {
  try {
    const str = typeof value === "string" ? value : JSON.stringify(value);
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
};

export const isObject = (thing: unknown) =>
  thing !== null && typeof thing === "object";
