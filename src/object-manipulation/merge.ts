/* eslint-disable @typescript-eslint/no-explicit-any */
import { assignValue } from "./assignValue";
import { forEach } from "./forEach";
import { MergeableInput, MergeableValue } from "./types/value.types";
export type MergedValue = MergeableValue | Record<string, MergeableValue>;
export function merge(
  ...objs: MergeableInput[]
): Record<string, MergeableValue> {
  const result: Record<string, MergeableValue> = {};

  const assignValueWrapper = (val: unknown, key: string | number): void => {
    assignValue(val, key, result, merge as any);
  };

  for (const obj of objs) {
    if (obj) {
      forEach<MergedValue>(obj, assignValueWrapper);
    }
  }

  return result;
}
