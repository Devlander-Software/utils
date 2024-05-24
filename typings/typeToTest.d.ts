type TypeToTest = "string" | "number" | "boolean" | "object" | "function" | "undefined" | "symbol";
export declare const typeOfTest: (type: TypeToTest) => (thing: any) => boolean;
export declare const isUndefined: (thing: any) => boolean;
export declare function isBuffer(val: {
    constructor: {
        isBuffer: (arg0: any) => any;
    } | null;
} | null): any;
export declare function isArrayBufferView(val: {
    buffer: any;
}): any;
export declare const isString: (thing: any) => boolean;
export declare const isNumber: (thing: any) => boolean;
export declare const isObject: (thing: unknown) => boolean;
export declare const isBoolean: (thing: unknown) => boolean;
export declare const isDate: (thing: any) => boolean;
export declare const isFile: (thing: any) => boolean;
export declare const isFormData: (thing: {
    append: any;
    toString: () => string;
}) => boolean;
export {};
