import { GlobalPayload } from './isGlobalDefined';
import { AnyObject, NestedRecord } from './types/value.types';
export type AssignValueCallback = (payload: AnyObject, key: string | number, val: NestedRecord) => NestedRecord;
export declare function assignValue(this: GlobalPayload & {
    caseless?: boolean;
}, val: unknown, key: string | number, payload: AnyObject, callback: AssignValueCallback): void;
