/**
 * Checks if a string is a valid JSON by attempting to parse it.
 * @param str The string to check.
 * @returns Returns the parsed JSON object if the string is valid JSON, otherwise returns false.
 */
export declare const isJson: (value: string | object) => JSON | boolean;
