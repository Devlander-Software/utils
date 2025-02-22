export interface WordSelectionOptions {
    removeDuplicates?: boolean;
    caseSensitive?: boolean;
}
/**
 * Extracts a specified number of words from a given sentence, with optional settings.
 *
 * @param sentence - The sentence from which words will be extracted.
 * @param wordLimit - The maximum number of words to include in the output.
 * @param options - Additional options to customize word extraction.
 *
 * @returns An object containing:
 * - `words`: A string of the extracted words up to the specified limit.
 * - `errors`: An object with error messages if any issues arise during extraction.
 */
export declare const extractWordsFromSentence: (sentence: string, wordLimit: number, options?: WordSelectionOptions) => {
    words: string;
    errors: {
        [key: string]: string;
    };
};
