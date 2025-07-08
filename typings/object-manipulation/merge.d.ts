import { MergeableInput, MergeableValue } from "../types/value.types";
export type MergedValue = MergeableValue | Record<string, MergeableValue>;
export declare function merge(...objs: MergeableInput[]): Record<string, MergeableValue>;
