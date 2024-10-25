interface CustomFormDataLike {
    append: (arg0: string, arg1: unknown) => void;
    toString: () => string;
}
export declare const isFormData: (thing: unknown) => thing is FormData | CustomFormDataLike;
export {};
