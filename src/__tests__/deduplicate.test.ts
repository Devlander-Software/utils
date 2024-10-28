import { deduplicate, DeduplicateInputType } from "../deduplicate";

describe("deduplicate", () => {
  // Test for STRING input type
  it("should remove duplicate characters from a string", () => {
    const result = deduplicate("aabbcc", DeduplicateInputType.STRING);
    expect(result).toBe("abc");
  });

  it("should return an empty string if given an empty string", () => {
    const result = deduplicate("", DeduplicateInputType.STRING);
    expect(result).toBe("");
  });

  // Test for ARRAY input type
  it("should remove duplicate elements from an array", () => {
    const result = deduplicate([1, 2, 2, 3, 3, 4], DeduplicateInputType.ARRAY);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("should return an empty array if given an empty array", () => {
    const result = deduplicate([], DeduplicateInputType.ARRAY);
    expect(result).toEqual([]);
  });

  // Test for OBJECT input type
  it("should remove duplicate key-value pairs from an object", () => {
    const input = { a: 1, b: 2, c: 2, d: 1, e: 3 };
    const result = deduplicate(input, DeduplicateInputType.OBJECT);
    expect(result).toEqual({ a: 1, b: 2, e: 3 });
  });

  it("should return an empty object if given an empty object", () => {
    const result = deduplicate({}, DeduplicateInputType.OBJECT);
    expect(result).toEqual({});
  });

  // Test for NUMBER input type
  it("should remove duplicate digits from a number", () => {
    const result = deduplicate(112233, DeduplicateInputType.NUMBER);
    expect(result).toBe(123);
  });

  it("should return the same number if no duplicates are present", () => {
    const result = deduplicate(123, DeduplicateInputType.NUMBER);
    expect(result).toBe(123);
  });

  // Test for MATRIX input type
  it("should remove duplicate elements within each row of a matrix", () => {
    const input = [
      [1, 2, 2, 3],
      [3, 3, 4, 4],
      [5, 6, 6, 7],
    ];
    const result = deduplicate(input, DeduplicateInputType.MATRIX);
    expect(result).toEqual([
      [1, 2, 3],
      [3, 4],
      [5, 6, 7],
    ]);
  });

  it("should return an empty matrix if given an empty matrix", () => {
    const result = deduplicate([], DeduplicateInputType.MATRIX);
    expect(result).toEqual([]);
  });

  // Error handling for unsupported input types or mismatches
  it("should throw an error if an unsupported input type is provided", () => {
    expect(() =>
      deduplicate("test", "invalid" as DeduplicateInputType),
    ).toThrowError("Unsupported type or input format for: invalid");
  });

  it("should throw an error if input format does not match specified input type", () => {
    expect(() =>
      deduplicate([1, 2, 3], DeduplicateInputType.STRING),
    ).toThrowError("Unsupported type or input format for: string");
  });
});
