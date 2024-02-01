/* eslint-disable @typescript-eslint/no-explicit-any */

import { isJson } from './isJson';
import { removeSpacesFromString } from './removeSpacesFromString';

export function removeSpacesFromJson(
  jsonInput: string | Record<string, unknown>,
): Record<string, unknown> {
  const jsonObject = isJson(jsonInput);
  if (
    jsonObject === false ||
    typeof jsonObject !== 'object' ||
    jsonObject === null
  ) {
    throw new Error('Invalid JSON input.');
  }

  const removeSpaces = (
    obj: Record<string, unknown>,
  ): Record<string, unknown> | unknown[] => {
    const newObj: Record<string, unknown> | unknown[] = Array.isArray(obj) ? [] : {};
    Object.keys(obj).forEach((key) => {
      const value = obj[key as string];
      if (typeof value === 'string') {
        if (!Array.isArray(newObj)) {
          newObj[key] = removeSpacesFromString(value);
        }
      } else if (typeof value === 'object' && value !== null) {
        if (!Array.isArray(newObj)) {
          newObj[key] = removeSpaces(value as Record<string, unknown>);
        }
      } else {
        if (!Array.isArray(newObj)) {
          newObj[key] = value;
        }
      }
      
    });
    return newObj;
  }

  return removeSpaces(jsonObject) as Record<string, unknown>;
}
