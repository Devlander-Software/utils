/**
 * Creates a throttled function that limits the rate at which the provided function can be called.
 * The function will be called at most once per specified delay period.
 *
 * @param fn - The function to throttle.
 * @param delay - The number of milliseconds to throttle by.
 * @returns A throttled version of the function.
 *
 * @example
 * ```typescript
 * const throttledScroll = throttle(handleScroll, 100);
 * window.addEventListener('scroll', throttledScroll);
 *
 * // In React/React Native:
 * const handleResize = throttle(() => {
 *   // Update layout
 * }, 250);
 * ```
 */
export declare const throttle: <T extends (...args: unknown[]) => unknown>(fn: T, delay: number) => ((...args: Parameters<T>) => void);
