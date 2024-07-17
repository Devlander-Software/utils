/**
 * Converts a dash-separated string to camel case.
 *
 * @param dashName - The dash-separated string to convert.
 * @returns The camel case version of the input string.
 */
export function dashToCamelCase(dashName: string): string {
  return dashName
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .toLowerCase()
    .replace(/-([a-z])/g, function (_match, group1) {
      return group1.toUpperCase()
    })
}
