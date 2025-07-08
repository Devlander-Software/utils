/**
 * Truncates a string to a specified length and appends ellipsis if needed.
 *
 * @param str - The string to truncate.
 * @param length - The maximum length of the string (including ellipsis).
 * @param ellipsis - Optional. The ellipsis string to append. Defaults to "…".
 * @returns The truncated string with ellipsis if needed.
 *
 * @example
 * ```typescript
 * truncate("Hello world", 8); // Returns: "Hello w…"
 * truncate("Short", 10); // Returns: "Short"
 * truncate("Very long string that needs truncation", 15); // Returns: "Very long str…"
 * truncate("Test", 3, "!!!"); // Returns: "!!!"
 * ```
 */
export declare const truncate: (str: string, length: number, ellipsis?: string) => string;
