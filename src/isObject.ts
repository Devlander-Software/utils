import { typeOfTest } from "./typeToTest";

/**
 * Checks if the given value is an object.
 * 
 * @param {unknown} thing - The value to check.
 * @returns {boolean} - Returns `true` if the value is an object and not `null`, otherwise `false`.
 */
export const isObject = (thing: unknown): boolean => {
    const isTypeObject = typeOfTest("object");
    return thing !== null && isTypeObject(thing);
  };