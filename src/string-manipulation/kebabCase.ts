/**
 * Converts a string to kebab-case (lowercase with hyphens).
 *
 * @param str - The string to convert to kebab-case.
 * @returns The string in kebab-case format.
 *
 * @example
 * ```typescript
 * kebabCase("hello world"); // Returns: "hello-world"
 * kebabCase("HelloWorld"); // Returns: "hello-world"
 * kebabCase("hello_world"); // Returns: "hello-world"
 * kebabCase("helloWorld"); // Returns: "hello-world"
 * ```
 */
export const kebabCase = (str: string): string => {
  if (typeof str !== "string") {
    return "";
  }

  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2") // camelCase to kebab-case
    .replace(/[\s_]+/g, "-") // spaces and underscores to hyphens
    .replace(/[^a-zA-Z0-9-]/g, "") // remove special characters except hyphens
    .toLowerCase()
    .replace(/^-+|-+$/g, ""); // remove leading/trailing hyphens
};
