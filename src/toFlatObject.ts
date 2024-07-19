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
export const toFlatObject = (
  sourceObj: object | null,
  destObj: Record<string, unknown> = {},
  filter?: (obj: object) => boolean,
  propFilter?: (prop: string, sourceObj: unknown, destObj: unknown) => boolean,
): Record<string, unknown> => {
  const merged: Record<string, boolean> = {};

  if (sourceObj == null) return destObj;

  let currentObj: object | null = sourceObj;

  do {
    const props = Object.getOwnPropertyNames(currentObj);

    for (let i = props.length - 1; i >= 0; i--) {
      const prop = props[i];

      if (
        (!propFilter || propFilter(prop, sourceObj, destObj)) &&
        !merged[prop]
      ) {
        destObj[prop] = (currentObj as Record<string, unknown>)[prop];
        merged[prop] = true;
      }
    }

    currentObj = Object.getPrototypeOf(currentObj);
  } while (
    currentObj &&
    (!filter || filter(currentObj)) &&
    currentObj !== Object.prototype
  );

  return destObj;
};
