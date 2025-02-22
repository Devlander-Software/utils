const { toString } = Object.prototype;

/**
 * Checks if a value is a valid Blob object.
 * @param value - The value to check.
 * @returns `true` if the value is a valid Blob, otherwise `false`.
 */
export function isValidBlob(value: unknown): boolean {
  return (
    typeof Blob !== "undefined" &&
    value instanceof Blob &&
    toString.call(value) === "[object Blob]"
  );
}
