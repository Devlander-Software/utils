/* eslint-disable @typescript-eslint/no-explicit-any */
import { assignValue } from './assignValue'
import { forEach } from './forEach'
import { GlobalPayload } from './isGlobalDefined'
import { MergeableInput, MergeableValue } from './types/value.types'
type MergedValue = MergeableValue | Record<string, MergeableValue>
export function merge(
  this: GlobalPayload & {
    caseless?: boolean
  },
  ...objs: MergeableInput[]
): Record<string, MergeableValue> {
  const result: Record<string, MergeableValue> = {}

  const assignValueWrapper = (val: unknown, key: string | number): void => {
    assignValue.call(this, val, key, result, merge as any)
  }

  for (const obj of objs) {
    if (obj) {
      forEach<MergedValue>(obj, assignValueWrapper)
    }
  }

  return result
}
