export const toCamelCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2
    })
}
