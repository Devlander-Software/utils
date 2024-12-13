/**
 * Enum representing prefixes for labels when there is a single item.
 */
export enum SingleItemLabelPrefix {
    Only = "Only",
    Exclusive = "Exclusive to",
    Solely = "Solely in",
  }
  
  /**
   * Enum representing prefixes for labels when there are multiple items.
   */
  export enum MultipleItemsLabelPrefix {
    IncludedIn = "Included in",
    FoundWithin = "Found in",
    PresentIn = "Present in",
  }
  
  /**
   * Enum for conjunctions used between items in a list.
   */
  export enum ListConjunction {
    And = "and",
    AsWellAs = "as well as",
    AlongWith = "along with",
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
  export const composeLabelFromItems = <T>({
    items,
    labelKey,
    singleItemPrefix = SingleItemLabelPrefix.Only,
    multipleItemsPrefix = MultipleItemsLabelPrefix.FoundWithin,
    conjunctionWord = ListConjunction.And,
  }: LabelCompositionParams<T>): string => {
    if (!items || items.length === 0) {
      return "";
    }
  
    // Normalize enum-like parameters to ensure correct prefix or conjunction
    const singlePrefix = SingleItemLabelPrefix[singleItemPrefix as keyof typeof SingleItemLabelPrefix] || singleItemPrefix;
    const multiplePrefix = MultipleItemsLabelPrefix[multipleItemsPrefix as keyof typeof MultipleItemsLabelPrefix] || multipleItemsPrefix;
    const conjunction = ListConjunction[conjunctionWord as keyof typeof ListConjunction] || conjunctionWord;
  
    // Handle single item case
    if (items.length === 1) {
      return `${singlePrefix} ${items[0][labelKey]}:`;
    }
  
    // Compose label for multiple items
    const label = items
      .map((item, index) => {
        const isLastItem = index === items.length - 1;
        const itemName = item[labelKey];
        return isLastItem ? `${conjunction} ${itemName}` : itemName;
      })
      .join(", ");
  
    return `${multiplePrefix} ${label}:`;
  };
  