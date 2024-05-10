/**
 * Retrieves a specific value from an object based on a given key.
 *
 * @param key - The key to search for in the object.
 * @param obj - The object containing the values.
 * @returns The value associated with the given key, or null if not found.
 */
export function getValueFromObject<T>(
  key: string,
  obj: Record<string, T>,
): T | null {
  return obj.hasOwnProperty(key) ? obj[key] : null;
}
