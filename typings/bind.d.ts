/**
 * Binds a function to a specific context.
 *
 * @template T - The type of the function.
 * @param {T} fn - The function to bind.
 * @param {unknown} thisArg - The context to bind the function to.
 * @returns {(...args: Parameters<T>) => ReturnType<T>} - The bound function.
 */
export declare function bind<T extends (...args: unknown[]) => unknown>(fn: T | ((...args: unknown[]) => unknown), thisArg: unknown): (...args: Parameters<T>) => ReturnType<T>;
