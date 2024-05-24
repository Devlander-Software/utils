import { isFunction } from './isFunction'
import { isObject } from './isJson'
import { kindOf } from './kindOf'

interface CustomFormDataLike {
  append: (arg0: string, arg1: unknown) => void
  toString: () => string
}

export const isFormData = (
  thing: unknown,
): thing is FormData | CustomFormDataLike => {
  let kind: string
  return (
    !!thing &&
    ((typeof FormData === 'function' && thing instanceof FormData) ||
      (isObject(thing) &&
        Object.prototype.hasOwnProperty.call(thing, 'append') &&
        isFunction((thing as CustomFormDataLike).append) &&
        ((kind = kindOf(thing)) === 'formdata' ||
          // detect form-data instance
          (kind === 'object' &&
            isFunction((thing as CustomFormDataLike).toString) &&
            (thing as CustomFormDataLike).toString() === '[object FormData]'))))
  )
}
