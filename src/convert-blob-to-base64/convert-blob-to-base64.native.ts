import { Buffer } from "buffer";

/**
 * Converts a Blob object to a Base64-encoded string using a Promise in React Native.
 * @param blob - The Blob object to convert.
 * @returns A Promise that resolves with the Base64-encoded string or rejects with an error.
 */
export function convertBlobToBase64NativeAsync(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    if (typeof Blob === "undefined" || !(blob instanceof Blob)) {
      return reject(new Error("The provided value is not a valid Blob."));
    }

    const reader = new FileReader();
    reader.readAsArrayBuffer(blob);

    reader.onloadend = () => {
      const arrayBuffer = reader.result as ArrayBuffer;
      const base64String = `data:${blob.type};base64,${Buffer.from(
        arrayBuffer,
      ).toString("base64")}`;
      resolve(base64String);
    };

    reader.onerror = () => {
      reject(new Error("Error occurred while reading the Blob."));
    };
  });
}
