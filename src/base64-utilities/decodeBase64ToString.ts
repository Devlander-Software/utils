/**
 * Universal base64 decoder for Node.js, browser, and React Native
 *
 * Decodes a base64-encoded string to a UTF-8 string in any JS environment.
 * @param base64 - The base64-encoded string
 * @returns The decoded UTF-8 string
 */
export function decodeBase64ToString(base64: string): string {
  // Node.js environment
  if (typeof Buffer !== "undefined") {
    return Buffer.from(base64, "base64").toString("utf8");
  }

  // Browser environment with atob
  if (typeof atob !== "undefined") {
    try {
      // Handle Unicode characters in browser
      return decodeURIComponent(
        Array.prototype.map
          .call(
            atob(base64),
            (c: string) =>
              "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2),
          )
          .join(""),
      );
    } catch {
      // Fallback to simple atob if decodeURIComponent fails
      return atob(base64);
    }
  }

  throw new Error("No base64 decoder available in this environment.");
}
