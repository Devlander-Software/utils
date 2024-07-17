/**
 * Checks if a value is of type number.
 *
 * This function is a specialized version of `typeOfTest` that checks if the provided value is a number.
 *
 * @param {unknown} thing - The value to check.
 * @returns {boolean} - Returns `true` if the value is a number, otherwise `false`.
 *
 * @example
 * // Returns true
 * isNumber(123);
 *
 * @example
 * // Returns false
 * isNumber("123");
 *
 * @example
 * // Returns false
 * isNumber({});
 */
export declare const isNumber: (thing: any) => boolean;
