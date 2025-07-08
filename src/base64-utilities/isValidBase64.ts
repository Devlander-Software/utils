/**
 * Validates if a string is a valid base64-encoded string
 *
 * Checks if the string contains only valid base64 characters and has proper padding.
 * @param str - The string to validate
 * @returns `true` if the string is valid base64, otherwise `false`
 */
export function isValidBase64(str: string): boolean {
  if (typeof str !== "string") {
    return false;
  }

  // Check if string is empty
  if (str.length === 0) {
    return false;
  }

  // Base64 regex pattern
  const base64Pattern = /^[A-Za-z0-9+/]*={0,2}$/;

  if (!base64Pattern.test(str)) {
    return false;
  }

  // Check padding
  const paddingLength = str.length % 4;
  if (paddingLength === 1) {
    return false; // Invalid padding
  }

  // Allow strings without padding (they are still valid base64)
  if (paddingLength === 0 || paddingLength === 2 || paddingLength === 3) {
    return true;
  }

  // Check for valid padding characters
  const padding = str.slice(-paddingLength);
  if (!/^=*$/.test(padding)) {
    return false;
  }

  return true;
}
