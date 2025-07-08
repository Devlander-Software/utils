export interface ErrorMessages {
    [key: string]: string | string[] | unknown;
    message?: string[];
}
/**
 * Retrieves the first error message found for any of the given fields.
 *
 * @param fieldsToCheck - A string or an array of strings representing the fields to check.
 * @param errors - An object containing error messages.
 * @returns The first error message found for any of the given fields, or undefined if not found.
 */
export declare const getMessageByField: (fieldsToCheck: string | string[], errors: ErrorMessages) => string | undefined;
