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
export declare const flattenArray: <T>(array: T[]) => T[];
