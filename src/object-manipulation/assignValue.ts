import { findKey } from "./findKey";
import { isPlainObject } from "../type-checking/isPlainObject";
import { AnyObject, MergeableValue, NestedRecord } from "../types/value.types";
// this needs an example in ts docs of how the function is used and why it's useful

export type AssignValueCallback = (
  payload: AnyObject,
  key: string | number,
  val: NestedRecord,
) => NestedRecord;

export function assignValue(
  val: unknown,
  key: string | number,
  payload: AnyObject,
  callback: AssignValueCallback,
): void {
  const tempPayload = { ...payload };
  const targetKey = findKey(payload, key) || key;

  if (isPlainObject(payload[targetKey]) && isPlainObject(val)) {
    payload[targetKey] = callback(
      tempPayload as NestedRecord,
      key,
      val as NestedRecord,
    );
  } else if (isPlainObject(val)) {
    payload[targetKey] = callback({}, key, val as NestedRecord);
  } else if (Array.isArray(val)) {
    payload[targetKey] = val.slice();
  } else {
    payload[targetKey] = val as MergeableValue;
  }
}
