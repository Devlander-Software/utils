import {
  extractWordsFromSentence,
  WordSelectionOptions,
} from "../extractWordsFromSentence";

describe("extractWordsFromSentence", () => {
  it("should return the exact number of words specified by the word limit", () => {
    const result = extractWordsFromSentence(
      "The quick brown fox jumps over the lazy dog",
      4,
    );
    expect(result.words).toBe("The quick brown fox"); // Match original case
    expect(result.errors).toEqual({});
  });

  it("should handle cases where word limit exceeds available words", () => {
    const result = extractWordsFromSentence("Hello world", 5);
    expect(result.words).toBe("Hello world"); // Match original case
    expect(result.errors.wordLimit).toBe(
      "Requested word limit (5) exceeds available words (2).",
    );
  });

  it("should remove duplicate words when removeDuplicates option is true", () => {
    const options: WordSelectionOptions = { removeDuplicates: true };
    const result = extractWordsFromSentence(
      "Hello world world Hello",
      3,
      options,
    );
    expect(result.words).toBe("Hello world"); // Match original case
    expect(result.errors.wordLimit).toBe(
      "Requested word limit (3) exceeds available words (2).",
    );
  });

  it("should not remove duplicate words when removeDuplicates option is false", () => {
    const options: WordSelectionOptions = { removeDuplicates: false };
    const result = extractWordsFromSentence(
      "Hello world world Hello",
      4,
      options,
    );
    expect(result.words).toBe("Hello world world Hello"); // Match original case
    expect(result.errors).toEqual({});
  });

  it("should handle case sensitivity when caseSensitive option is true", () => {
    const options: WordSelectionOptions = { caseSensitive: true };
    const result = extractWordsFromSentence(
      "Hello world hello World",
      4,
      options,
    );
    expect(result.words).toBe("Hello world hello World"); // Maintain exact case for each word
    expect(result.errors).toEqual({});
  });

  it("should handle case insensitivity when caseSensitive option is false", () => {
    const options: WordSelectionOptions = {
      caseSensitive: false,
      removeDuplicates: true,
    };
    const result = extractWordsFromSentence(
      "Hello world hello World",
      4,
      options,
    );
    expect(result.words).toBe("hello world"); // Converted to lowercase
    expect(result.errors.wordLimit).toBe(
      "Requested word limit (4) exceeds available words (2).",
    );
  });
});
