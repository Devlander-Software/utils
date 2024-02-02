type NestedObject = {
    [key: string]: any;
};
/**
 * Merges two nested objects together.
 *
 * @param oldObj - The original object to merge.
 * @param newObj - The new object to merge.
 * @returns The merged object.
 */
export declare const mergeObjects: (oldObj: NestedObject, newObj: NestedObject) => NestedObject;
export {};
