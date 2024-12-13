const { toString } = Object.prototype;

/**
 * Checks if a value is a valid Blob object.
 * @param value - The value to check.
 * @returns `true` if the value is a valid Blob, otherwise `false`.
 */
export function isValidBlob(value: unknown): boolean {
  if (typeof Blob === 'undefined') {
    return false;
  }

  return value instanceof Blob || toString.call(value) === '[object Blob]';
}

/**
 * Converts a Blob object to a Base64-encoded string.
 * @param blob - The Blob object to convert.
 * @param onComplete - Callback invoked upon completion with either an error or the Base64 string.
 */
export function convertBlobToBase64(
  blob: unknown,
  onComplete: (error: Error | null, base64String?: string | null) => void
): void {
  if (!isValidBlob(blob)) {
    onComplete(new Error('Provided argument is not a valid Blob.'));
    return;
  }

  if (typeof window.FileReader === 'undefined') {
    onComplete(new Error('FileReader is not available in this environment.'));
    return;
  }

  const reader = new FileReader();
  reader.readAsDataURL(blob as Blob);

  reader.onloadend = () => {
    onComplete(null, reader.result as string);
  };

  reader.onerror = () => {
    onComplete(new Error('Error occurred while reading the Blob.'));
  };
}

// Default export for easier importing when using the conversion function.
export default convertBlobToBase64;