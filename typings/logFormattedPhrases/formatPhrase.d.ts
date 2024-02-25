import { PhraseItem, PhraseOrderType } from "./formattedPhrase.types";
export declare const formatPhrase: (item: PhraseItem) => void | {
    message: string;
    formattersApplied: PhraseOrderType["property"][];
};
