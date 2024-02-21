// cleanJson.ts
import { isJson } from './isJson'
import { jsonContainsNewLine } from './jsonContainsNewLine'
import { removeNewLinesFromString } from './removeNewLinesFromString'

/**
 * Removes new lines from a JSON string or object.
 * @param jsonInput The JSON string or object to remove new lines from.
 * @returns Returns the JSON object with new lines removed.
 * @throws Throws an error if the input is not valid JSON.
 */
export const removeNewLinesFromJson = (
  jsonInput: string | Record<string, unknown>,
): Record<string, unknown> => {
  const jsonObject = isJson(jsonInput)

  if (!jsonObject || typeof jsonObject !== 'object' || jsonObject === null) {
    throw new Error('Invalid JSON input.')
  }

  const removeNewLines = (
    obj: Record<string, unknown>,
  ): Record<string, unknown> | unknown[] => {
    const newObj: Record<string, unknown> | unknown[] = Array.isArray(obj)
      ? []
      : {}

    Object.keys(obj).forEach((key) => {
      const value = obj[key]

      if (typeof value === 'string') {
        if (!Array.isArray(newObj)) {
          newObj[key] = removeNewLinesFromString(value)
        }
      } else if (typeof value === 'object' && value !== null) {
        if (!Array.isArray(newObj)) {
          newObj[key] = removeNewLines(value as Record<string, unknown>)
        }
      } else {
        if (!Array.isArray(newObj)) {
          newObj[key] = value
        }
      }
    })

    return newObj
  }

  const result = jsonContainsNewLine(jsonObject)
    ? removeNewLines(jsonObject)
    : jsonObject
  return result as Record<string, unknown>
}
