// isNumeric.test.ts

import { isNumeric } from "../isNumeric";

describe("isNumeric function", () => {
  it("should return true for numeric values", () => {
    expect(isNumeric(123)).toBe(true);
    expect(isNumeric(1.23)).toBe(true);
    expect(isNumeric("123")).toBe(true);
    expect(isNumeric("1.23")).toBe(true);
  });

  it("should return false for non-numeric values", () => {
    expect(isNumeric("abc")).toBe(false);
    expect(isNumeric({})).toBe(false);
    expect(isNumeric(null)).toBe(false);
    expect(isNumeric(undefined)).toBe(false);
    expect(isNumeric(true)).toBe(false);
    expect(isNumeric(false)).toBe(false);
  });

  it("should return false for edge cases", () => {
    expect(isNumeric("")).toBe(false); // empty string
    expect(isNumeric(" 123 ")).toBe(false); // string with whitespace
    expect(isNumeric(NaN)).toBe(false); // NaN is not considered numeric
    expect(isNumeric(Infinity)).toBe(false); // Infinity is not considered numeric
  });
});
