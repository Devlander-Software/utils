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
export declare const deepClone: <T>(value: T) => T;
