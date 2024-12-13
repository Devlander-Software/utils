import { getMessageFromObject } from './getMessageFromObject'
import { getValueFromObject } from './getValueFromObject'
import { isEmpty } from './isEmpty'

export interface ErrorMessages {
  [key: string]: string | string[] | unknown
  message?: string[]
}

/**
 * Retrieves the first error message found for any of the given fields.
 *
 * @param fieldsToCheck - A string or an array of strings representing the fields to check.
 * @param errors - An object containing error messages.
 * @returns The first error message found for any of the given fields, or undefined if not found.
 */
export const getMessageByField = (
  fieldsToCheck: string | string[],
  errors: ErrorMessages,
): string | undefined => {
  const getMessageForField = (field: string): string | undefined => {
    if (!isEmpty(errors) && getValueFromObject(field, errors)) {
      const errorMessage = getValueFromObject(field, errors)
      if (typeof errorMessage === 'string') {
        return errorMessage
      }
    } else if (!isEmpty(errors)) {
      const errorMessage = getMessageFromObject(field, errors)
      if (errorMessage) {
        return errorMessage
      }
    }
    return undefined
  }

  if (typeof fieldsToCheck === 'string') {
    return getMessageForField(fieldsToCheck) || undefined
  } else if (Array.isArray(fieldsToCheck)) {
    for (const field of fieldsToCheck) {
      const message = getMessageForField(field)
      if (message) {
        return message
      }
    }
    return undefined
  } else {
    return undefined
  }
}
