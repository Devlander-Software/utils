import { AnyObject } from "./types/value.types";
/**
 * Checks if a value is a plain object.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a plain object, `false` otherwise.
 */
export declare const isPlainObject: (value: any) => value is AnyObject;
