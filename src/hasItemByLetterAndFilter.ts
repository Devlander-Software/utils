/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Finds an item in an array based on a specific letter and optional filter text.
 * @param letter - The letter to search for in the item's key value.
 * @param array - The array of items to search through.
 * @param key - The key to check in each item. Defaults to "name".
 * @param index - The index of the letter to check in the key value. Defaults to 0.
 * @param filterText - The optional filter text to match against the key value.
 * @returns True if an item is found that matches the letter and filter text, false otherwise.
 */

export const hasItemByLetterAndFilter = (
  letter: string,
  array: Array<any>,
  key: string = "name",
  index?: number,
  filterText?: string,
): boolean => {
  return array.some((item) => {
    if (letter.length !== 1) {
      throw new Error("Letter must be a single character.");
    }
    const keyValue: string | null = item[key] || null;

    if (!keyValue) {
      return false;
    }

    const checkForLetter = (keyValue: string, index = 0): boolean => {
      if (typeof index === "undefined") {
        index = 0;
      }
      const values = [keyValue, keyValue.toLowerCase()];

      return values.some((value) => value.charAt(index) === letter);
    };

    const checkForFilterText = (keyValue: string): boolean => {
      if (!filterText) {
        return true;
      }

      const filterTextValues = [filterText, filterText.toLowerCase()];

      return filterTextValues.every((filterTextValue) =>
        keyValue.includes(filterTextValue),
      );
    };

    const hasFilterText = checkForFilterText(keyValue);
    const hasLetter = checkForLetter(keyValue, index);

    const hasValue = hasFilterText && hasLetter ? true : false;

    return hasValue;
  });
};
