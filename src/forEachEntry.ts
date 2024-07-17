type IterableObject<T> = {
  [Symbol.iterator]: () => IterableIterator<[string, T]>
}

type ForEachEntryCallback<T> = (key: string, value: T) => void

export const forEachEntry = <T>(
  obj: IterableObject<T>,
  fn: ForEachEntryCallback<T>,
): void => {
  if (!obj || typeof obj[Symbol.iterator] !== 'function') {
    throw new TypeError('Object is not iterable')
  }

  const iterator = obj[Symbol.iterator]()

  let result: IteratorResult<[string, T]>

  while (!(result = iterator.next()).done) {
    const [key, value] = result.value
    fn.call(obj, key, value)
  }
}
