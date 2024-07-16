// GenericObjectThatCanBeExtendedSo people can define what the object returns

/**
 * Interface for the return type of the extractKeysAndValuesFromRecord function.
 * 
 * @template K - Type of the keys in the record.
 * @template V - Type of the values in the record.
 */
interface ReturnTypeForValuesFromRecord<K, V> {
    keys: K[];
    values: V[];
  }
  
  /**
   * Extracts the keys and values from a record and returns them as arrays.
   * 
   * @template T - Type of the record being passed in. Defaults to Record<string, any>.
   * 
   * @param {T} record - The record from which to extract keys and values.
   * @returns {ReturnTypeForValuesFromRecord<keyof T, T[keyof T]>} An object containing the keys and values arrays.
   */
  export function extractKeysAndValues<T extends Record<string, any> = Record<string, any>>(
    record: T
  ): ReturnTypeForValuesFromRecord<keyof T, T[keyof T]> {
    const keys = Object.keys(record) as (keyof T)[];
    const values = Object.values(record) as T[keyof T][];
  
    return { keys, values };
  }
  
  // Example usage with default type
  const exampleRecord = {
    name: "Alice",
    age: 25,
    city: "Wonderland"
  };
  
  const result = extractKeysAndValues(exampleRecord);
  console.log(result.keys); // Output: ['name', 'age', 'city']
  console.log(result.values); // Output: ['Alice', 25, 'Wonderland']
  
  // Custom types for a specific use case
  interface CustomRecord {
    id: number;
    title: string;
    completed: boolean;
  }
  
  interface CustomReturnType {
    keys: (keyof CustomRecord)[];
    values: (CustomRecord[keyof CustomRecord])[];
  }
  
  // Example usage with custom types
  const customRecord: CustomRecord = {
    id: 1,
    title: "Learn TypeScript",
    completed: true
  };
  
  const customResult = extractKeysAndValues<CustomRecord>(customRecord);
  console.log(customResult.keys); // Output: ['id', 'title', 'completed']
  console.log(customResult.values); // Output: [1, 'Learn TypeScript', true]
  