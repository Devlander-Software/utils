export const findItemByLetterAndFilter = (
  letter: string,
  array: any[],
  keyToCheck: string = "name",
  index: number = 0,
  filterText?: string
): boolean =>
  array.find((item) => {
    const itemValue = item[keyToCheck] ? item[keyToCheck].toLowerCase() : null;

    if (!itemValue) {
      return false;
    }

    if (itemValue.charAt(index) !== letter) {
      return false;
    }

    if (filterText && !itemValue.includes(filterText.toLowerCase())) {
      return false;
    }

    return true;
  });
