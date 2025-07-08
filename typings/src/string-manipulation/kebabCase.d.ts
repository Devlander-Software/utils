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
export declare const kebabCase: (str: string) => string;
