type ObjectWithMethods = {
    [key: string]: Function;
};
export declare const freezeMethods: (obj: ObjectWithMethods) => void;
export {};
