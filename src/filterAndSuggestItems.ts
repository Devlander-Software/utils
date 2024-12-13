/* eslint-disable @typescript-eslint/no-explicit-any */

export const defaultStopWords = [
  'and',
  'to',
  '.',
  'the',
  ',',
  'of',
  'in',
  'for',
  '&',
  'a',
  'an',
  'with',
  'on',
  'at',
  'from',
  'as',
  'by',
  'or',
  'but',
  'into',
  'is',
  'are',
  'was',
  'were',
  'be',
  'being',
  'been',
  'have',
  'has',
  'had',
  'having',
  'do',
  'does',
  'did',
  'doing',
  'will',
  'would',
  'should',
  'can',
  'could',
  'may',
  'might',
  'must',
  'ought',
  'shall',
  'should',
  'there',
  'their',
  'they',
  'them',
  'these',
  'those',
  'this',
  'that',
  'then',
  'than',
  'thus',
  'so',
  'such',
  'if',
  'else',
  'not',
  'no',
  'yes',
  'i',
  'you',
  'he',
  'she',
  'it',
  'we',
  'me',
  'him',
  'her',
  'us',
  'my',
  'your',
  'his',
  'its',
  'our',
  'mine',
  'yours',
  'hers',
  'ours',
  'theirs',
  'who',
  'whom',
  'which',
  'what',
  'when',
  'where',
  'why',
  'how',
  'up',
  'about',
  'into',
  'with',
  'over',
  'before',
  'after',
  'between',
  'among',
  'through',
  'during',
  'above',
  'below',
  'out',
  'off',
  'down',
  'under',
  'again',
  'further',
  'once',
  'here',
  'all',
  'any',
  'both',
  'each',
  'few',
  'more',
  'most',
  'other',
  'some',
  'such',
  'both',
  'each',
]

/**
 * Generic interface representing an item with an identifier and search fields.
 *
 * @template IdType - Type of the item's identifier (string or number).
 * @template ItemType - Type of each item in the dataItems array.
 */
type SearchableItem<ItemType, IdType extends string | number> = ItemType & {
  [key: string]: any
  _id?: IdType
}

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
export function filterAndSuggestItems<
  ItemType,
  IdType extends string | number = string,
>(
  searchText: string = '',
  dataItems: SearchableItem<ItemType, IdType>[] = [],
  excludedIds: IdType[] | IdType = [],
  fieldsToSearch: string[] = ['name'],
  idKey: string = '_id', // Default to '_id' to match Product interface
  stopWords: string[] = defaultStopWords,
): SearchableItem<ItemType, IdType>[] {
  const suggestions: SearchableItem<ItemType, IdType>[] = []

  // If there's no search text or data, return an empty array
  if (!searchText.trim() || !dataItems.length) return suggestions

  // Process search text by filtering out stop words
  const filteredSearchTerms = searchText
    .toLowerCase()
    .split(' ')
    .filter((term) => term && !stopWords.includes(term))

  // Return empty if all terms were stop words or filtered out
  if (filteredSearchTerms.length === 0) return suggestions

  // Convert excludedIds to a set of strings for consistent ID comparison
  const excludedIdsSet = new Set(
    Array.isArray(excludedIds)
      ? excludedIds.map(String)
      : [String(excludedIds)],
  )

  // Process each item in dataItems
  for (const item of dataItems) {
    const itemId = String(item[idKey])

    // Skip the item if its ID is in the excludedIds set
    if (excludedIdsSet.has(itemId)) continue

    // Check if item fields contain all search terms
    const isMatch = fieldsToSearch.some((field) => {
      const itemFieldValue = item[field]
      if (!itemFieldValue || typeof itemFieldValue !== 'string') return false

      // Process each item field by removing stop words and checking for matches
      const itemWords = itemFieldValue
        .toLowerCase()
        .split(' ')
        .filter((word) => !stopWords.includes(word))
      return filteredSearchTerms.every((term) => itemWords.includes(term))
    })

    if (isMatch) {
      suggestions.push(item)
    }
  }

  return suggestions
}
