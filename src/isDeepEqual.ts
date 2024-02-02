/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Checks if two objects are deeply equal.
 * 
 * @param obj1 - The first object to compare.
 * @param obj2 - The second object to compare.
 * @returns `true` if the objects are deeply equal, `false` otherwise.
 */
export function isDeepEqual(
  obj1: Record<string, any>,
  obj2: Record<string, any>,
): boolean {
  if (obj1 === obj2) {
    return true
  }

  if (
    typeof obj1 !== 'object' ||
    obj1 === null ||
    typeof obj2 !== 'object' ||
    obj2 === null
  ) {
    return false
  }

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !isDeepEqual(obj1[key], obj2[key])) {
      return false
    }
  }

  return true
}
