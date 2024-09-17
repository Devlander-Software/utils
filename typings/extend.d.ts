import { AnyObject } from "./types/value.types";
export declare const extend: <T, U>(a: T, b: U, thisArg?: AnyObject, { allOwnKeys }?: {
    allOwnKeys?: boolean | undefined;
}) => T & U;
