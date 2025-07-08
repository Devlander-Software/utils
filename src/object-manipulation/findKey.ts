export function findKey<T extends object>(
  obj: T,
  key: string | number,
): keyof T | null {
  if (typeof key === "number") {
    key = key.toString();
  }
  const lowerKey = key.toLowerCase();
  const keys = Object.keys(obj) as Array<keyof T>;
  let i = keys.length;
  while (i-- > 0) {
    const currentKey = keys[i];
    if (lowerKey === currentKey.toString().toLowerCase()) {
      return currentKey;
    }
  }
  return null;
}
