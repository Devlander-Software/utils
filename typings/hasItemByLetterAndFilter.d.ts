/**
 * Finds an item in an array based on a specific letter and optional filter text.
 * @param letter - The letter to search for in the item's key value.
 * @param array - The array of items to search through.
 * @param key - The key to check in each item. Defaults to "name".
 * @param index - The index of the letter to check in the key value. Defaults to 0.
 * @param filterText - The optional filter text to match against the key value.
 * @returns True if an item is found that matches the letter and filter text, false otherwise.
 */
export declare const hasItemByLetterAndFilter: (letter: string, array: Array<any>, key?: string, index?: number, filterText?: string) => boolean;
