import { isFunction } from "./isFunction";
import { kindOfTest } from "./kindOfTest";

/* eslint-disable @typescript-eslint/no-explicit-any */
type TypeToTest =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "function"
  | "undefined"
  | "symbol";

export const typeOfTest =
  (type: TypeToTest) =>
  (thing: any): boolean =>
    typeof thing === type;

export const isUndefined = typeOfTest("undefined");

export function isBuffer(
  val: { constructor: { isBuffer: (arg0: any) => any } | null } | null,
) {
  return (
    val !== null &&
    !isUndefined(val) &&
    val.constructor !== null &&
    !isUndefined(val.constructor) &&
    isFunction(val.constructor.isBuffer) &&
    val.constructor.isBuffer(val)
  );
}

export function isArrayBufferView(val: { buffer: any }) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}

export const isNumber = typeOfTest("number");
export const isObject = (thing: unknown) =>
  thing !== null && typeof thing === "object";
export const isBoolean = (thing: unknown) => thing === true || thing === false;

export const isDate = kindOfTest("Date");
export const isFile = kindOfTest("File");

export const isArrayBuffer = kindOfTest("ArrayBuffer");
