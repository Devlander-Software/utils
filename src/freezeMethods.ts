/* eslint-disable @typescript-eslint/ban-types */
import { isFunction } from './isFunction'
import { reduceDescriptors } from './reduceDescriptors'

type ObjectWithMethods = {
  [key: string]: Function
}

export const freezeMethods = (obj: ObjectWithMethods): void => {
  reduceDescriptors(obj, (descriptor: PropertyDescriptor, name: string) => {
    // Skip restricted properties in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].includes(name)) {
      return false
    }

    const value = obj[name]

    if (!isFunction(value)) return

    descriptor.enumerable = false

    if ('writable' in descriptor) {
      descriptor.writable = false
    } else {
      if (!descriptor.set) {
        descriptor.set = () => {
          throw new Error(`Cannot rewrite read-only method '${name}'`)
        }
      }
    }

    return descriptor
  })
}
