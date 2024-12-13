/**
 * Converts a Blob object to a Base64-encoded string in React Native.
 * @param blob - The Blob object to convert.
 * @param onComplete - Callback invoked upon completion with either an error or the Base64 string.
 */
export declare function convertBlobToBase64(blob: Blob, onComplete: (error: Error | null, base64String?: string | null) => void): void;
/**
 * Converts a Blob object to a Base64-encoded string using a Promise in React Native.
 * @param blob - The Blob object to convert.
 * @returns A Promise that resolves with the Base64-encoded string or rejects with an error.
 */
export declare function convertBlobToBase64Async(blob: Blob): Promise<string>;
