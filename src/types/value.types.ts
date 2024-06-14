/* eslint-disable @typescript-eslint/no-explicit-any */

export type ObjectIndexType = string | number | symbol;

export type AnyObject = {
  [key: ObjectIndexType]: any;
} & Record<string, any>;

export type PrimitiveType = number | string | boolean | symbol | bigint;
export type NestedValueType = PrimitiveType | AnyObject;
export type NestedRecord = Record<string, NestedValueType>;

export type MergeableValue =
  | NestedValueType
  | NestedRecord
  | MergeableValue[]
  | null
  | undefined;

export type MergedValue = MergeableValue | Record<string, MergeableValue>;

export type OptionalMergeableObject =
  | Record<string, MergeableValue>
  | undefined
  | null;

export type MergeableInput =
  | OptionalMergeableObject
  | OptionalMergeableObject[];
