export function forEach<T>(
  obj: T | T[] | null | undefined,
  fn: (
    value: T[keyof T] | unknown,
    key: keyof T | string | number,
    obj: T | T[],
  ) => void,
  { allOwnKeys = false }: { allOwnKeys?: boolean } = {},
): void {
  // Don't bother if no value provided
  if (obj === null || typeof obj === "undefined") {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== "object") {
    obj = [obj] as unknown as T[];
  }

  if (Array.isArray(obj)) {
    // Iterate over array values
    for (let i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys
      ? (Object.getOwnPropertyNames(obj) as Array<keyof T>)
      : (Object.keys(obj) as Array<keyof T>);
    const len = keys.length;

    for (let i = 0; i < len; i++) {
      const key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
