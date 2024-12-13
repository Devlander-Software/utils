// this needs an example in ts docs of how the function is used and why it's useful

export function arrayToObject<T>(arr: T[]): { [key: string]: T } {
  const obj: { [key: string]: T } = {}
  for (let i = 0; i < arr.length; i++) {
    obj[i.toString()] = arr[i]
  }
  return obj
}
