type Reducer = (
  descriptor: PropertyDescriptor,
  name: string,
) => false | PropertyDescriptor | undefined

export const reduceDescriptors = (obj: object, reducer: Reducer): void => {
  const props = Object.getOwnPropertyNames(obj)
  for (const name of props) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, name)
    if (descriptor) {
      const result = reducer(descriptor, name)
      if (result !== false) {
        Object.defineProperty(obj, name, result || descriptor)
      }
    }
  }
}
