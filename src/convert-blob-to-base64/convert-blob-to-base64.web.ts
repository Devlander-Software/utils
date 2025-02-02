/**
 * Converts a Blob object to a Base64-encoded string in the web environment.
 * @param blob - The Blob object to convert.
 * @returns A Promise that resolves with the Base64-encoded string or rejects with an error.
 */
export function convertBlobToBase64WebAsync(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    if (typeof Blob === "undefined" || !(blob instanceof Blob)) {
      return reject(new Error("The provided value is not a valid Blob."));
    }

    if (typeof FileReader === "undefined") {
      return reject(
        new Error("FileReader is not available in this environment."),
      );
    }

    const reader = new FileReader();
    reader.readAsDataURL(blob);

    reader.onloadend = () => {
      resolve(reader.result as string);
    };

    reader.onerror = () => {
      reject(new Error("Error occurred while reading the Blob."));
    };
  });
}
