type IterableObject<T> = {
    [Symbol.iterator]: () => IterableIterator<[string, T]>;
};
type ForEachEntryCallback<T> = (key: string, value: T) => void;
export declare const forEachEntry: <T>(obj: IterableObject<T>, fn: ForEachEntryCallback<T>) => void;
export {};
