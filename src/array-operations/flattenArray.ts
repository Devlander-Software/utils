/**
 * Flattens a nested array by one level.
 * 
 * @param array - The array to flatten.
 * @returns A flattened array (one level deep).
 * 
 * @example
 * ```typescript
 * flattenArray([1, [2, 3], [4, 5]]); // Returns: [1, 2, 3, 4, 5]
 * flattenArray([[1, 2], [3, 4], [5, 6]]); // Returns: [1, 2, 3, 4, 5, 6]
 * flattenArray([1, 2, 3]); // Returns: [1, 2, 3]
 * flattenArray([1, [2, [3, 4]]]); // Returns: [1, 2, [3, 4]]
 * ```
 */
export const flattenArray = <T>(array: T[]): T[] => {
  if (!Array.isArray(array)) {
    return [];
  }
  
  return array.reduce<T[]>((flattened, item) => {
    if (Array.isArray(item)) {
      return flattened.concat(item);
    }
    return flattened.concat([item]);
  }, []);
}; 