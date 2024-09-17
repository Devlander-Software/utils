/**
 * Flattens the properties of a source object into a destination object, traversing up its prototype chain.
 *
 * @param sourceObj - The source object to flatten.
 * @param destObj - The destination object where properties will be added.
 * @param filter - Optional filter function to include/exclude objects during traversal.
 * @param propFilter - Optional filter function to include/exclude specific properties.
 * @returns The destination object with flattened properties.
 */
export declare const toFlatObject: (sourceObj: object | null, destObj?: Record<string, unknown>, filter?: ((obj: object) => boolean) | undefined, propFilter?: ((prop: string, obj: object, destObj: Record<string, unknown>) => boolean) | undefined) => Record<string, unknown>;
