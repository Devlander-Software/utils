/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Finds an item in an array based on a specific letter and optional filter text.
 * @param letter - The letter to search for in the item's key value.
 * @param array - The array of items to search through.
 * @param keyToCheck - The key to check in each item. Defaults to "name".
 * @param index - The index of the letter to check in the key value. Defaults to 0.
 * @param filterText - The optional filter text to match against the key value.
 * @returns True if an item is found that matches the letter and filter text, false otherwise.
 */

// make letter resricted to one character
// using type script

export const findItemByLetterAndFilter = (
  letter: string,
  array: Array<any>,
  keyToCheck: string = "name",
  index: number = 0,
  filterText?: string,
): boolean => {
  return array.some((item) => {
    if (letter.length !== 1) {
      throw new Error("Letter must be a single character.");
    }
    const existingValue: string | null = item[keyToCheck] || null;

    if (!existingValue) {
      return false;
    }

    const checkForLetter = (existingValue: string): boolean => {
      const values = [existingValue, existingValue.toLowerCase()];

      return values.some((value) => value.charAt(index) === letter);
    };

    const checkForFilterText = (existingValue: string): boolean => {
      if (!filterText) {
        return true;
      }

      const filterTextValues = [filterText, filterText.toLowerCase()];

      return filterTextValues.every((filterTextValue) =>
        existingValue.includes(filterTextValue),
      );
    };

    const hasFilterText = checkForFilterText(existingValue);
    const hasLetter = checkForLetter(existingValue);

    return hasFilterText && hasLetter;
  });
};
