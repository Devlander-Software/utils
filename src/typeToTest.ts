/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Represents the possible types that can be checked using the `typeOfTest` function.
 * 
 * This type includes all the possible values that the JavaScript `typeof` operator can return.
 */
type TypeToTest =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "function"
  | "undefined"
  | "symbol";

/**
 * Creates a function to test the type of a given value.
 * 
 * This higher-order function generates a type-checking function for the specified type.
 *
 * @param {TypeToTest} type - The type to check for.
 * @returns {(thing: any) => boolean} - Returns a function that checks if a value is of the specified type.
 * 
 * @example
 * // Creates a function to check if a value is a string
 * const isString = typeOfTest("string");
 * 
 * @example
 * // Returns true
 * isString("hello");
 * 
 * @example
 * // Returns false
 * isString(123);
 */
export const typeOfTest = (type: TypeToTest) => (thing: any): boolean => typeof thing === type;
