/**
 * Returns an array of numbers starting from the specified start value and containing the specified count of elements.
 * @param start The starting value of the range.
 * @param count The number of elements in the range.
 * @returns An array of numbers representing the range.
 */
export const getRange = (start: number, count: number) => {
  if (count < 0) {
    return []
  }
  return Array.apply(0, Array(count)).map((_element, index) => index + start)
}
