export declare function forEach<T>(obj: T | T[] | null | undefined, fn: (value: T[keyof T] | unknown, key: keyof T | string | number, obj: T | T[]) => void, { allOwnKeys }?: {
    allOwnKeys?: boolean;
}): void;
