/* eslint-disable @typescript-eslint/no-explicit-any */
type NestedObject = {
  [key: string]: any
};

/**
 * Merges two nested objects together.
 *
 * @param oldObj - The original object to merge.
 * @param newObj - The new object to merge.
 * @returns The merged object.
 */
export const mergeObjects = (oldObj: NestedObject, newObj: NestedObject): NestedObject => {
  const result: NestedObject = { ...oldObj };

  Object.keys(newObj).forEach((key) => {
    const newValue = newObj[key];
    const oldValue = result[key];

    if (Array.isArray(newValue) && Array.isArray(oldValue)) {
      result[key] = [...oldValue, ...newValue];
    } else if (typeof newValue === "object" && newValue !== null && !Array.isArray(newValue)) {
      if (typeof oldValue === "object" && !Array.isArray(oldValue)) {
        result[key] = mergeObjects(oldValue, newValue);
      } else {
        result[key] = newValue;
      }
    } else {
      result[key] = newValue;
    }
  });

  return result;
};