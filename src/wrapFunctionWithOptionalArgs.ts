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
export const wrapFunctionWithOptionalArgs = <T extends unknown[], U>(fn: (...args: [...T, U[]]) => void) => {
    return (...args: [...T, ...U[]]): void => {
        const requiredArgs = args.slice(0, fn.length - 1) as T;  // Extract required arguments
        const optionalArgs = args.slice(fn.length - 1) as U[];   // Extract optional arguments
        const combinedArgs: [...T, U[]] = [...requiredArgs, optionalArgs]; // Combine them
        fn(...combinedArgs);
    };
};
