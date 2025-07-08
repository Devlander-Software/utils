/**
 * Enum representing prefixes for labels when there is a single item.
 */
export declare enum SingleItemLabelPrefix {
    Only = "Only",
    Exclusive = "Exclusive to",
    Solely = "Solely in"
}
/**
 * Enum representing prefixes for labels when there are multiple items.
 */
export declare enum MultipleItemsLabelPrefix {
    IncludedIn = "Included in",
    FoundWithin = "Found in",
    PresentIn = "Present in"
}
/**
 * Enum for conjunctions used between items in a list.
 */
export declare enum ListConjunction {
    And = "and",
    AsWellAs = "as well as",
    AlongWith = "along with"
}
/**
 * Parameters for composing a label from an array of items.
 * @template T - The type of each item in the array.
 */
export interface LabelCompositionParams<T> {
    /**
     * Array of items to compose into the label.
     */
    items: T[];
    /**
     * Key in each item to be used for label generation.
     */
    labelKey: keyof T;
    /**
     * Prefix to use if there is only one item. Defaults to SingleItemLabelPrefix.Only.
     */
    singleItemPrefix?: SingleItemLabelPrefix | keyof typeof SingleItemLabelPrefix;
    /**
     * Prefix to use for multiple items. Defaults to MultipleItemsLabelPrefix.FoundWithin.
     */
    multipleItemsPrefix?: MultipleItemsLabelPrefix | keyof typeof MultipleItemsLabelPrefix;
    /**
     * Conjunction to use when listing items, applied before the last item. Defaults to ListConjunction.And.
     */
    conjunctionWord?: ListConjunction | keyof typeof ListConjunction;
}
/**
 * Composes a descriptive label from an array of objects by concatenating values of a specified key in each object.
 * The label adjusts automatically based on the number of items and provides flexibility to customize prefixes and conjunctions.
 *
 * @template T - The type of each item in the items array.
 * @param {LabelCompositionParams<T>} params - Configuration parameters for generating the label.
 * @returns {string} A formatted string label based on the provided items and options.
 *
 * @example
 * // Example usage with a simple array of products
 * interface Product { name: string; }
 * const products: Product[] = [
 *   { name: "Apple" },
 *   { name: "Banana" },
 *   { name: "Cherry" },
 * ];
 *
 * const label = composeLabelFromItems({
 *   items: products,
 *   labelKey: "name",
 *   singleItemPrefix: "Only",
 *   multipleItemsPrefix: "FoundWithin",
 *   conjunctionWord: "And",
 * });
 * // Output: "Found in Apple, Banana and Cherry:"
 */
export declare const composeLabelFromItems: <T>({ items, labelKey, singleItemPrefix, multipleItemsPrefix, conjunctionWord, }: LabelCompositionParams<T>) => string;
