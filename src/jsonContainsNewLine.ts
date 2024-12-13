import { isJson } from './isJson'

export const jsonContainsNewLine = (jsonInput: string | object): boolean => {
  const jsonObject:
    | Record<string, string | object>
    | boolean
    | Record<string, unknown> = isJson(jsonInput)
  if (!jsonObject) {
    throw new Error('Invalid JSON string.')
  }

  const checkForNewLine = (obj: Record<string, string | object>): boolean => {
    for (const key in obj) {
      if (typeof obj[key] === 'string' && (obj[key] as string).includes('\n')) {
        return true
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        if (checkForNewLine(obj[key] as Record<string, string | object>)) {
          return true
        }
      }
    }
    return false
  }

  if (typeof jsonObject !== 'boolean') {
    return checkForNewLine(
      jsonObject as unknown as Record<string, string | object>,
    )
  } else {
    throw new Error('Invalid input: input must be a JSON string or an object.')
  }
}
