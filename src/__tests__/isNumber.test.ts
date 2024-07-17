// isNumber.test.ts

import { isNumber } from "../isNumber";

describe("isNumber function", () => {
  it("should return true for numbers", () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber(1.23)).toBe(true);
    expect(isNumber(NaN)).toBe(true); // NaN is technically a number
  });

  it("should return false for non-numbers", () => {
    expect(isNumber("123")).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
  });
});
