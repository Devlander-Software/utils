import { Buffer } from 'buffer';

/**
 * Converts a Blob object to a Base64-encoded string in React Native.
 * @param blob - The Blob object to convert.
 * @param onComplete - Callback invoked upon completion with either an error or the Base64 string.
 */
export function convertBlobToBase64(
    blob: Blob,
    onComplete: (error: Error | null, base64String?: string | null) => void
  ): void {
    if (!(globalThis as any).Buffer) {
      onComplete(new Error('Buffer is not available in this environment.'));
      return;
    }
  
    const reader = new FileReader();
    reader.readAsArrayBuffer(blob);
  
    reader.onloadend = () => {
      const arrayBuffer = reader.result as ArrayBuffer;
      const base64String = `data:${blob.type};base64,${Buffer.from(arrayBuffer).toString(
        'base64'
      )}`;
      onComplete(null, base64String);
    };
  
    reader.onerror = () => {
      onComplete(new Error('Error occurred while reading the Blob.'));
    };
  }
  
  /**
   * Converts a Blob object to a Base64-encoded string using a Promise in React Native.
   * @param blob - The Blob object to convert.
   * @returns A Promise that resolves with the Base64-encoded string or rejects with an error.
   */
  export function convertBlobToBase64Async(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      convertBlobToBase64(blob, (error, base64String) => {
        if (error) {
          reject(error);
        } else {
          resolve(base64String as string);
        }
      });
    });
  }