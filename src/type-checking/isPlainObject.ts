/* eslint-disable @typescript-eslint/no-explicit-any */

import { AnyObject } from "../types/value.types";

// Helper to check if a value is a plain object
/**
 * Checks if a value is a plain object.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a plain object, `false` otherwise.
 */
export const isPlainObject = (value: any): value is AnyObject => {
  return Object.prototype.toString.call(value) === "[object Object]";
};
