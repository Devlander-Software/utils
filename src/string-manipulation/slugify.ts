/**
 * Converts a string to a URL-friendly slug.
 * 
 * @param str - The string to convert to a slug.
 * @returns A URL-friendly slug string.
 * 
 * @example
 * ```typescript
 * slugify("Hello World!"); // Returns: "hello-world"
 * slugify("This is a Test String"); // Returns: "this-is-a-test-string"
 * slugify("Special@#$%Characters"); // Returns: "special-characters"
 * slugify("Multiple   Spaces"); // Returns: "multiple-spaces"
 * ```
 */
export const slugify = (str: string): string => {
  if (typeof str !== 'string') {
    return '';
  }
  
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // remove special characters except spaces and hyphens
    .replace(/[\s_-]+/g, '-') // replace spaces, underscores, and multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // remove leading/trailing hyphens
}; 