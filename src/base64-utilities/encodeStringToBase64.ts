/**
 * Universal base64 encoder for Node.js, browser, and React Native
 *
 * Encodes a UTF-8 string to a base64-encoded string in any JS environment.
 * @param str - The UTF-8 string to encode
 * @returns The base64-encoded string
 */
export function encodeStringToBase64(str: string): string {
  // Node.js environment
  if (typeof Buffer !== "undefined") {
    return Buffer.from(str, "utf8").toString("base64");
  }

  // Browser environment with btoa
  if (typeof btoa !== "undefined") {
    try {
      // Handle Unicode characters in browser
      return btoa(
        encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
          String.fromCharCode(parseInt(p1, 16)),
        ),
      );
    } catch {
      // Fallback to simple btoa if encodeURIComponent fails
      return btoa(str);
    }
  }

  throw new Error("No base64 encoder available in this environment.");
}
