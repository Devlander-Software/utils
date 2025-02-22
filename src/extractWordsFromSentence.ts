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
export const extractWordsFromSentence = (
  sentence: string,
  wordLimit: number,
  options: WordSelectionOptions = {},
): { words: string; errors: { [key: string]: string } } => {
  // Define default options and merge with provided options
  const defaultOptions: WordSelectionOptions = {
    caseSensitive: true,
    removeDuplicates: false,
  };
  const finalOptions = { ...defaultOptions, ...options };

  // Step 1: Split the sentence into words
  let words = sentence.split(" ");

  // Step 2: Apply case insensitivity if specified
  if (!finalOptions.caseSensitive) {
    words = words.map((word) => word.toLowerCase());
  }

  // Step 3: Remove duplicates if specified
  if (finalOptions.removeDuplicates) {
    const seen = new Set();
    words = words.filter((word) => {
      if (seen.has(word)) {
        return false;
      }
      seen.add(word);
      return true;
    });
  }

  // Step 4: Check if the final processed word count meets the word limit
  const errors: { [key: string]: string } = {};
  if (words.length < wordLimit) {
    errors.wordLimit = `Requested word limit (${wordLimit}) exceeds available words (${words.length}).`;
  }

  // Step 5: Extract words up to the word limit
  const extractedWords = words.slice(0, wordLimit).join(" ");

  return {
    words: extractedWords,
    errors,
  };
};
