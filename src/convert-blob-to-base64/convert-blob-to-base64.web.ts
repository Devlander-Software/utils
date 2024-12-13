const { toString } = Object.prototype;

/**
 * Checks if a value is a valid Blob object.
 * @param value - The value to check.
 * @returns `true` if the value is a valid Blob, otherwise `false`.
 */
export function isValidBlob(value: unknown): boolean {
  return (
    typeof Blob !== 'undefined' &&
    value instanceof Blob &&
    toString.call(value) === '[object Blob]'
  );
}

/**
 * Converts a Blob object to a Base64-encoded string in the web environment.
 * @param blob - The Blob object to convert.
 * @param onComplete - Callback invoked upon completion with either an error or the Base64 string.
 */
export function convertBlobToBase64(
  blob: Blob,
  onComplete: (error: Error | null, base64String?: string | null) => void
): void {
  if (!isValidBlob(blob)) {
    onComplete(new Error('Provided argument is not a valid Blob.'));
    return;
  }

  if (typeof FileReader === 'undefined') {
    onComplete(new Error('FileReader is not available in this environment.'));
    return;
  }

  const reader = new FileReader();
  reader.readAsDataURL(blob);

  reader.onloadend = () => {
    onComplete(null, reader.result as string);
  };

  reader.onerror = () => {
    onComplete(new Error('Error occurred while reading the Blob.'));
  };
}

/**
 * Converts a Blob object to a Base64-encoded string using a Promise in the web environment.
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