export declare function forEach<T>(obj: T | T[] | null | undefined, fn: (value: T[keyof T] | T, key: keyof T | number, obj: T | T[]) => void, { allOwnKeys }?: {
    allOwnKeys?: boolean;
}): void;
