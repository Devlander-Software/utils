import { AppliedFormatter, PhraseItem, PhraseOrderType } from "./formattedPhrase.types";
export declare const defaultPhraseOrder: PhraseOrderType[];
/**
 * Retrieves the applied phrase styles from the given item.
 * @param item The phrase item to retrieve the styles from.
 * @returns An array of applied formatters representing the styles to apply.
 */
export declare const getPhraseStylesFromOrder: (item: PhraseItem) => AppliedFormatter[];
