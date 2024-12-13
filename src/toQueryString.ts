/**
 * Converts an object of query parameters into a URL-encoded query string.
 * This function filters out keys with `undefined` or `null` values, so only defined parameters
 * will be included in the final query string.
 *
 * @param query - An optional object containing key-value pairs for query parameters.
 *   - `key: string`: The query parameter name.
 *   - `value: string | number | boolean | null | undefined`: The value of the query parameter.
 *     If the value is `null` or `undefined`, it will be excluded from the final query string.
 * @returns A string representing the query parameters in URL-encoded format.
 *   - If `query` is undefined or empty, an empty string `""` will be returned.
 *   - If all values in the `query` object are `null` or `undefined`, an empty string `""` will be returned.
 *
 * @example
 * Basic usage:
 * ```typescript
 * toQueryString({ name: "John", age: 30 });
 * // Returns: "?name=John&age=30"
 * ```
 *
 * Filtering out undefined or null values:
 * ```typescript
 * toQueryString({ name: "Alice", age: null, active: true });
 * // Returns: "?name=Alice&active=true"
 * ```
 *
 * Handling empty or undefined input:
 * ```typescript
 * toQueryString();
 * // Returns: ""
 *
 * toQueryString({});
 * // Returns: ""
 *
 * toQueryString({ name: null });
 * // Returns: ""
 * ```
 *
 * @usecases
 * 1. **Building URL with query parameters**: This function is useful when constructing URLs with dynamic query parameters in frontend applications.
 * 2. **API Requests**: When making requests to APIs that accept query parameters, this function can simplify the process of generating the query string.
 */
export const toQueryString = (query?: {
  [key: string]: string | number | boolean | null | undefined
}): string => {
  if (!query) return ''

  const keys = Object.keys(query)

  // Filter out keys with undefined or null values
  const definedKeys = keys.filter(
    (key) => query[key] !== undefined && query[key] !== null,
  )

  // If there are no defined keys, return an empty string
  if (!definedKeys.length) return ''

  // Construct the query string by encoding key-value pairs
  const queryString = definedKeys
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(query[key]))}`,
    )
    .join('&')

  return `?${queryString}`
}
