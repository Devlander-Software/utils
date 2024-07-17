export const endsWith = (
  str: string,
  searchString: string,
  position?: number,
): boolean => {
  if (position === undefined || position > str.length) {
    position = str.length
  }
  position -= searchString.length
  const lastIndex = str.indexOf(searchString, position)
  return lastIndex !== -1 && lastIndex === position
}
