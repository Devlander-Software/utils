/**
 * Checks if a value is a valid Blob object.
 * @param value - The value to check.
 * @returns `true` if the value is a valid Blob, otherwise `false`.
 */
export declare function isValidBlob(value: unknown): boolean;
/**
 * Converts a Blob object to a Base64-encoded string in the web environment.
 * @param blob - The Blob object to convert.
 * @param onComplete - Callback invoked upon completion with either an error or the Base64 string.
 */
export declare function convertBlobToBase64(blob: Blob, onComplete: (error: Error | null, base64String?: string | null) => void): void;
/**
 * Converts a Blob object to a Base64-encoded string using a Promise in the web environment.
 * @param blob - The Blob object to convert.
 * @returns A Promise that resolves with the Base64-encoded string or rejects with an error.
 */
export declare function convertBlobToBase64Async(blob: Blob): Promise<string>;
