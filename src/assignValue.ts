import { findKey } from './findKey'
import { GlobalPayload } from './isGlobalDefined'
import { isPlainObject } from './isPlainObject'
import { AnyObject, MergeableValue, NestedRecord } from './types/value.types'

export type AssignValueCallback = (
  payload: AnyObject,
  key: string | number,
  val: NestedRecord,
) => NestedRecord

export function assignValue(
  this: GlobalPayload & {
    caseless?: boolean
  },
  val: unknown,
  key: string | number,
  payload: AnyObject,
  callback: AssignValueCallback,
): void {
  const tempPayload = { ...payload }
  const targetKey = (this.caseless && findKey(payload, key)) || key

  if (isPlainObject(payload[targetKey]) && isPlainObject(val)) {
    payload[targetKey] = callback(
      tempPayload as NestedRecord,
      key,
      val as NestedRecord,
    )
  } else if (isPlainObject(val)) {
    payload[targetKey] = callback({}, key, val as NestedRecord)
  } else if (Array.isArray(val)) {
    payload[targetKey] = val.slice()
  } else {
    payload[targetKey] = val as MergeableValue
  }
}
