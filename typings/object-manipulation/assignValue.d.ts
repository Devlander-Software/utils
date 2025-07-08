import { AnyObject, NestedRecord } from "../types/value.types";
export type AssignValueCallback = (payload: AnyObject, key: string | number, val: NestedRecord) => NestedRecord;
export declare function assignValue(val: unknown, key: string | number, payload: AnyObject, callback: AssignValueCallback): void;
