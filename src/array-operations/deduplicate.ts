/* eslint-disable @typescript-eslint/no-unused-vars */
export enum DeduplicateInputType {
  STRING = "string",
  OBJECT = "object",
  ARRAY = "array",
  NUMBER = "number",
  MATRIX = "matrix",
}

/**
 * Deduplicates elements from various input types, including strings, arrays, objects,
 * numbers, and matrices, based on the specified type. This replaces the removeDuplicatesFromString that was used in previous projects.
 *
 * @param input - The input from which to remove duplicates. Supported types are `string`,
 * `Record<string, unknown>`, `unknown[]`, or `number`.
 * @param inputType - Specifies the type of the input to control the deduplication strategy.
 * Accepts either `DeduplicateInputType` enum values or their string literals (e.g., "string").
 * If not provided, the function will auto-detect the input type.
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
export const deduplicate = (
  input: string | Record<string, unknown> | unknown[] | number,
  inputType?:
    | DeduplicateInputType
    | keyof typeof DeduplicateInputType,
): string | Record<string, unknown> | number | unknown[] => {
  // Auto-detect input type if not provided
  if (!inputType) {
    if (typeof input === "string") {
      inputType = DeduplicateInputType.STRING;
    } else if (Array.isArray(input)) {
      // Check if it's a matrix (2D array)
      if (input.length > 0 && input.every(Array.isArray)) {
        inputType = DeduplicateInputType.MATRIX;
      } else {
        inputType = DeduplicateInputType.ARRAY;
      }
    } else if (typeof input === "number") {
      inputType = DeduplicateInputType.NUMBER;
    } else if (typeof input === "object" && input !== null) {
      inputType = DeduplicateInputType.OBJECT;
    } else {
      throw new Error(`Unsupported input type: ${typeof input}`);
    }
  }

  const getDeduplicationMethod = () => {
    switch (inputType) {
      case DeduplicateInputType.STRING:
      case "STRING":
      case "string":
        if (typeof input === "string") {
          return input
            .split("")
            .filter((item, pos, self) => self.indexOf(item) === pos)
            .join("");
        }
        break;

      case DeduplicateInputType.ARRAY:
      case "ARRAY":
      case "array":
        if (Array.isArray(input)) {
          return input.filter((item, pos, self) => self.indexOf(item) === pos);
        }
        break;

      case DeduplicateInputType.OBJECT:
      case "OBJECT":
      case "object":
        if (typeof input === "object" && !Array.isArray(input)) {
          const seenValues = new Set();
          const uniqueEntries = Object.entries(input).filter(([key, value]) => {
            // Only include the entry if its value is not in `seenValues`
            if (!seenValues.has(value)) {
              seenValues.add(value);
              return true;
            }
            return false;
          });
          return Object.fromEntries(uniqueEntries);
        }
        break;

      case DeduplicateInputType.NUMBER:
      case "NUMBER":
      case "number":
        if (typeof input === "number") {
          const uniqueDigits = input
            .toString()
            .split("")
            .filter((digit, pos, self) => self.indexOf(digit) === pos)
            .join("");
          return parseInt(uniqueDigits, 10);
        }
        break;

      case DeduplicateInputType.MATRIX:
      case "MATRIX":
      case "matrix":
        if (Array.isArray(input) && input.every(Array.isArray)) {
          return input.map((row) => Array.from(new Set(row)));
        }
        break;
    }
    throw new Error(`Unsupported type or input format for: ${inputType}`);
  };

  return getDeduplicationMethod();
};
