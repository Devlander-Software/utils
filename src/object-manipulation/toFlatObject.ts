export const toFlatObject = (
  sourceObj: object | null,
  destObj: Record<string, unknown> = {},
  filter?: (obj: object) => boolean,
  propFilter?: (
    prop: string,
    obj: object,
    destObj: Record<string, unknown>,
  ) => boolean,
): Record<string, unknown> => {
  if (!sourceObj) {
    return destObj;
  }

  let currentObj: object | null = sourceObj;
  const merged = new Set<string>();

  do {
    if (filter && !filter(currentObj)) {
      break;
    }

    const props = Object.getOwnPropertyNames(currentObj);
    for (const prop of props) {
      // Skip properties from Object.prototype
      if (Object.prototype.hasOwnProperty.call(Object.prototype, prop)) {
        continue;
      }

      if (
        merged.has(prop) ||
        prop in destObj || // Exclude properties already in destObj
        (propFilter && !propFilter(prop, currentObj, destObj))
      ) {
        continue;
      }

      const value = (currentObj as Record<string, unknown>)[prop];
      if (value !== undefined) {
        destObj[prop] = value;
        merged.add(prop);
      }
    }

    currentObj = Object.getPrototypeOf(currentObj);
  } while (currentObj && currentObj !== Object.prototype);

  return destObj;
};
