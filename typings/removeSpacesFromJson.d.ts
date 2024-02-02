/**
 * Removes spaces from a JSON object or string.
 *
 * @param jsonInput - The JSON object or string to remove spaces from.
 * @returns The JSON object with spaces removed.
 * @throws {Error} If the input is not a valid JSON.
 */
export declare const removeSpacesFromJson: (jsonInput: string | Record<string, unknown>) => Record<string, unknown>;
