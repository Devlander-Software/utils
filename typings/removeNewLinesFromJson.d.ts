/**
 * Removes new lines from a JSON string or object.
 * @param jsonInput The JSON string or object to remove new lines from.
 * @returns Returns the JSON object with new lines removed.
 * @throws Throws an error if the input is not valid JSON.
 */
export declare const removeNewLinesFromJson: (jsonInput: string | Record<string, unknown>) => Record<string, unknown>;
