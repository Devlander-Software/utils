/**
 * Wraps a function to handle optional arguments as an array.
 *
 * @template T - The tuple type of the required arguments.
 * @template U - The type of the optional arguments.
 * @param {(...args: [...T, U[]]) => void} fn - The function to wrap.
 * @returns {(...args: [...T, ...U[]]) => void} - The wrapped function.
 *
 * @example
 * const wrappedFn = wrapFunctionWithOptionalArgs((a: number, b: number, options: number[]) => {
 *     console.log(a, b, options);
 * });
 * wrappedFn(1, 2, 3, 4, 5); // Output: 1 2 [3, 4, 5]
 */
export declare const wrapFunctionWithOptionalArgs: <T extends unknown[], U>(fn: (...args: [...T, U[]]) => void) => (...args: [...T, ...U[]]) => void;
