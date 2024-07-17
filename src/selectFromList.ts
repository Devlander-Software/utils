/**
 * Selects an element from a list of provided items based on the specified index.
 *
 * @template T - The type of items in the list.
 * @param {number} index - The index of the item to select.
 * @param {...T[]} items - The list of items from which to select.
 * @returns {(T | undefined)} - The selected item if the index is valid, otherwise undefined.
 *
 * @example
 * const result = selectFromList(2, "one", "two", "three");
 * console.log(result); // Output: "three"
 */
export const selectFromList = <T>(
  index: number,
  ...items: T[]
): T | undefined => {
  return items[index]
}
