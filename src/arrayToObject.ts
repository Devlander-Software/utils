export function arrayToObject<T>(arr: T[]): { [key: string]: T } {
  const obj: { [key: string]: T } = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i.toString()] = arr[i];
  }
  return obj;
}
