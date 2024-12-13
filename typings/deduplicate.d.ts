export declare enum DeduplicateInputType {
    STRING = "string",
    OBJECT = "object",
    ARRAY = "array",
    NUMBER = "number",
    MATRIX = "matrix"
}
/**
 * Deduplicates elements from various input types, including strings, arrays, objects,
 * numbers, and matrices, based on the specified type. This replaces the removeDuplicatesFromString that was used in previous projects.
 *
 * @param input - The input from which to remove duplicates. Supported types are `string`,
 * `Record<string, unknown>`, `unknown[]`, or `number`.
 * @param inputType - Specifies the type of the input to control the deduplication strategy.
 * Accepts either `DeduplicateInputType` enum values or their string literals (e.g., "string").
 * Defaults to `DeduplicateInputType.STRING`.
 * @returns The input with duplicates removed, formatted according to the specified input type:
 * - `STRING` - Returns a string with duplicate characters removed.
 * - `ARRAY` - Returns an array with duplicate elements removed.
 * - `OBJECT` - Returns an object with unique key-value pairs.
 * - `NUMBER` - Returns a number with duplicate digits removed.
 * - `MATRIX` - For a 2D array, removes duplicate elements within each sub-array (row).
 *
 * @throws Will throw an error if the input type is unsupported or if the input format
 * does not match the specified `inputType`.
 */
export declare const deduplicate: (input: string | Record<string, unknown> | unknown[] | number, inputType?: DeduplicateInputType | keyof typeof DeduplicateInputType) => string | Record<string, unknown> | number | unknown[];
