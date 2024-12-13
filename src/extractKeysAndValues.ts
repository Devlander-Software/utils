/**
 * Interface for the return type of the extractKeysAndValuesFromRecord function.
 *
 * @template K - Type of the keys in the record.
 * @template V - Type of the values in the record.
 */
export interface ReturnTypeForValuesFromRecord<K extends string, V> {
  keys: K[]
  values: V[]
}

/**
 * Extracts the keys and values from a record and returns them as arrays.
 *
 * @template T - Type of the record being passed in.
 *
 * @param {T} record - The record from which to extract keys and values.
 * @returns {ReturnTypeForValuesFromRecord<keyof T & string, T[keyof T]>} An object containing the keys and values arrays.
 */
export function extractKeysAndValues<T extends Record<string, unknown>>(
  record: T,
): ReturnTypeForValuesFromRecord<keyof T & string, T[keyof T]> {
  const keys = Object.keys(record) as (keyof T & string)[]
  const values = Object.values(record) as T[keyof T][]

  return { keys, values }
}

// this needs an example in ts docs of how the function is used and why it's useful
// // Example usage with default type
// const exampleRecord = {
//   name: 'Alice',
//   age: 25,
//   city: 'Wonderland',
// }

// // const result = extractKeysAndValues(exampleRecord)

// // Custom types for a specific use case
// interface CustomRecord extends Record<string, unknown> {
//   id: number
//   title: string
//   completed: boolean
// }

// const customRecord: CustomRecord = {
//   id: 1,
//   title: 'Learn TypeScript',
//   completed: true,
// }

// const customResult = extractKeysAndValues<CustomRecord>(customRecord)
