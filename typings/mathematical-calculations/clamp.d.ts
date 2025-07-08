/**
 * Restricts a value between a minimum and maximum bound.
 *
 * @param num - The number to clamp.
 * @param min - The minimum bound.
 * @param max - The maximum bound.
 * @returns The clamped value.
 *
 * @example
 * ```typescript
 * clamp(5, 0, 10); // Returns: 5
 * clamp(-5, 0, 10); // Returns: 0
 * clamp(15, 0, 10); // Returns: 10
 * clamp(3.14, 0, 5); // Returns: 3.14
 * ```
 */
export declare const clamp: (num: number, min: number, max: number) => number;
