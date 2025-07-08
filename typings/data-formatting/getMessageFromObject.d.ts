type ErrorObject = Record<string, unknown>;
/**
 * Retrieves a specific message from an error object based on a given field.
 *
 * @param field - The field value to look for in the error messages.
 * @param obj - An object containing error messages.
 * @param nameOfField - The key name within the error object that holds the messages array.
 * @returns The message containing the field value, or null if not found.
 */
export declare const getMessageFromObject: (field: string | number | boolean | null | undefined, obj: ErrorObject, nameOfField?: string) => string | null | undefined;
export {};
