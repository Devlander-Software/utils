export declare const defaultStopWords: string[];
/**
 * Generic interface representing an item with an identifier and search fields.
 *
 * @template IdType - Type of the item's identifier (string or number).
 * @template ItemType - Type of each item in the dataItems array.
 */
type SearchableItem<ItemType, IdType extends string | number> = ItemType & {
    [key: string]: any;
    _id?: IdType;
};
/**
 * Filters and suggests objects from an array based on a description and specified fields.
 *
 * @template ItemType - Type of the items to be searched.
 * @template IdType - Type of the identifier for each item (string or number).
 * @param searchText - The text to search within items.
 * @param dataItems - The array of objects to search through.
 * @param excludedIds - An array of IDs or a single ID to exclude from search results.
 * @param fieldsToSearch - The keys within each item to search against. Defaults to `["name"]`.
 * @param idKey - The key representing the unique identifier in each item. Defaults to `_id`.
 * @param stopWords - A list of words to exclude from the search. Defaults to `defaultStopWords`.
 * @returns A filtered array of objects matching the search criteria.
 *
 * @example
 * // Basic usage with custom data shape
 * interface Product {
 *   id: string;
 *   name: string;
 *   description: string;
 * }
 *
 * const products: Product[] = [
 *   { id: "1", name: "Apple", description: "A fresh apple" },
 *   { id: "2", name: "Banana", description: "Yellow banana" },
 * ];
 *
 * const results = filterAndSuggestItems<Product, string>(
 *   "apple",
 *   products,
 *   [], // No excluded IDs
 *   ["name", "description"], // Fields to search within
 *   "id" // ID key
 * );
 * console.log(results); // Logs items containing "apple"
 */
export declare function filterAndSuggestItems<ItemType, IdType extends string | number = string>(searchText?: string, dataItems?: SearchableItem<ItemType, IdType>[], excludedIds?: IdType[] | IdType, fieldsToSearch?: string[], idKey?: string, // Default to '_id' to match Product interface
stopWords?: string[]): SearchableItem<ItemType, IdType>[];
export {};
