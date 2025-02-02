/**
 * Converts an object of query parameters into a URL-encoded query string.
 * This function filters out keys with `undefined` or `null` values, so only defined parameters
 * will be included in the final query string.
 *
 * @param query - An optional object containing key-value pairs for query parameters.
 *   - `key: string`: The query parameter name.
 *   - `value: string | number | boolean | null | undefined | ArrayTypeToParse`: The value of the query parameter.
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
 * Handling arrays and objects in filters:
 * ```typescript
 * toQueryString({ filters: [{ type: "category", value: "books" }, { type: "price", value: "low" }] });
 * // Returns: "?filters[0][type]=category&filters[0][value]=books&filters[1][type]=price&filters[1][value]=low"
 * ```
 */

type ArrayTypeToParse =
  | {
      [key: string]: string | number | boolean | null | undefined | string[];
    }[]
  | string[]
  | number[]
  | boolean[]
  | null[]
  | undefined[];

export const toQueryString = (query?: Record<string, string | number | boolean | null | undefined | ArrayTypeToParse | Record<string, string | number | boolean>>): string => {
  if (!query || Object.keys(query).length === 0) return "";

  const flattenObject = (obj: Record<string, unknown>, prefix = ''): Record<string, string> => {
    return Object.keys(obj).reduce((acc: Record<string, string>, k: string) => {
      const value = obj[k];
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.assign(acc, flattenObject(value as Record<string, unknown>, k));
      } else if (value !== null && value !== undefined) {
        acc[k] = String(value);
      }
      return acc;
    }, {});
  };

  const flattenedQuery = flattenObject(query);

  const queryString = Object.keys(flattenedQuery)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(flattenedQuery[key])}`)
    .join("&");

  return queryString ? `?${queryString}` : "";
};
