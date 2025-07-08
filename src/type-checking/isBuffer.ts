/* eslint-disable @typescript-eslint/no-explicit-any */
import { isFunction } from "./isFunction";
import { isUndefined } from "./isUndefined";
import { kindOfTest } from "./kindOfTest";

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
export const isArrayBuffer = kindOfTest("ArrayBuffer");
