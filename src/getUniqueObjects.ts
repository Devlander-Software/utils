/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Returns an array of unique elements from the input array based on the specified property.
 * @param array The input array.
 * @param property The property to compare for uniqueness.
 * @returns An array of unique elements.
 */
export const getUniqueObjects = (
  array: Array<any>,
  property: string,
): any[] => {
  const uniqueElements = array
    .map((element) => element[property])
    .filter(
      (element, index, finalArray) => finalArray.indexOf(element) === index,
    )
    .map((element, index) => array[index]);

  return uniqueElements;
};

