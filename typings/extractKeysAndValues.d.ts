/**
 * Interface for the return type of the extractKeysAndValuesFromRecord function.
 *
 * @template K - Type of the keys in the record.
 * @template V - Type of the values in the record.
 */
export interface ReturnTypeForValuesFromRecord<K extends string, V> {
    keys: K[];
    values: V[];
}
/**
 * Extracts the keys and values from a record and returns them as arrays.
 *
 * @template T - Type of the record being passed in.
 *
 * @param {T} record - The record from which to extract keys and values.
 * @returns {ReturnTypeForValuesFromRecord<keyof T & string, T[keyof T]>} An object containing the keys and values arrays.
 */
export declare function extractKeysAndValues<T extends Record<string, unknown>>(record: T): ReturnTypeForValuesFromRecord<keyof T & string, T[keyof T]>;
