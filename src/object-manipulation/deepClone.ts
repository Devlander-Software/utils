/**
 * Creates a deep copy of an object or array.
 * 
 * ✅ Works in Node.js, React, and React Native.
 * 
 * @example
 * const obj = { a: 1, b: { c: 2 } };
 * const cloned = deepClone(obj);
 * obj.b.c = 3;
 * console.log(cloned.b.c) // Still 2
 * 
 * const arr = [1, [2, 3], { a: 4 }];
 * const clonedArr = deepClone(arr);
 * arr[1][0] = 5;
 * console.log(clonedArr[1][0]) // Still 2
 * 
 * @param value - The value to deep clone
 * @returns A deep copy of the value
 */
export const deepClone = <T>(value: T): T => {
  if (value === null || typeof value !== 'object') {
    return value;
  }
  
  if (value instanceof Date) {
    return new Date(value.getTime()) as T;
  }
  
  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags) as T;
  }
  
  if (Array.isArray(value)) {
    return value.map(item => deepClone(item)) as T;
  }
  
  if (typeof value === 'object') {
    const cloned: Record<string, unknown> = {};
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        cloned[key] = deepClone(value[key]);
      }
    }
    return cloned as T;
  }
  
  return value;
}; 