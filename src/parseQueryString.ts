/**
 * Parses a query string into an object of key-value pairs.
 *
 * @param queryString - The query string to parse. It may include a leading '?' which will be removed automatically.
 * @returns An object where keys are query parameter names and values are either a string or an array of strings if the parameter appears multiple times.
 *
 * @example
 * ```typescript
 * const queryString = '?foo=bar&baz=qux&foo=baz';
 * const result = parseQueryString(queryString);
 * console.log(result);
 * // Output: { foo: ['bar', 'baz'], baz: 'qux' }
 * ```
 */
export const parseQueryString = (
  queryString: string,
): Record<string, string | string[]> => {
  // Remove the leading '?' if present
  if (queryString.startsWith('?')) {
    queryString = queryString.substring(1)
  }

  return queryString
    .split('&')
    .reduce((acc: Record<string, string | string[]>, pair) => {
      const [key, value] = pair.split('=').map(decodeURIComponent)

      if (!key) return acc // Skip empty keys

      if (key in acc) {
        const existing = acc[key]
        if (Array.isArray(existing)) {
          existing.push(value)
        } else {
          acc[key] = [existing, value]
        }
      } else {
        acc[key] = value
      }

      return acc
    }, {})
}
