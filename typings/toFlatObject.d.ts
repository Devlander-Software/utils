/**
 * Flattens the properties of a source object into a destination object.
 *
 * @param {object | null} sourceObj - The source object to flatten.
 * @param {Record<string, unknown>} [destObj={}] - The destination object to which properties are added.
 * @param {(obj: object) => boolean} [filter] - A function to filter which objects' properties to include.
 * @param {(prop: string, sourceObj: unknown, destObj: unknown) => boolean} [propFilter] - A function to filter which properties to include.
 * @returns {Record<string, unknown>} - The destination object with properties flattened from the source object.
 *
 * @example
 * const source = { a: 1, b: { c: 2 } };
 * const result = toFlatObject(source);
 * console.log(result); // { a: 1, c: 2 }
 *
 * @example
 * const error = new Error('Test error');
 * const result = toFlatObject(error);
 * console.log(result); // { message: 'Test error', stack: '...' }
 */
export declare const toFlatObject: (sourceObj: object | null, destObj?: Record<string, unknown>, filter?: ((obj: object) => boolean) | undefined, propFilter?: ((prop: string, sourceObj: unknown, destObj: unknown) => boolean) | undefined) => Record<string, unknown>;
