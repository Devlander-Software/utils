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
export declare const slugify: (str: string) => string;
