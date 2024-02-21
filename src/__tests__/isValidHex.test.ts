import { isValidHex } from "../isValidHex";

describe("isValidHex", () => {
  it("should return true for valid hex colors", () => {
    expect(isValidHex("#000")).toBe(true);
    expect(isValidHex("#ffffff")).toBe(true);
    expect(isValidHex("#12345678")).toBe(true);
  });

  it("should return false for invalid hex colors", () => {
    expect(isValidHex("000")).toBe(false);
    expect(isValidHex("#12345")).toBe(false);
    expect(isValidHex("#gggggg")).toBe(false);
    expect(isValidHex("#123456789")).toBe(false);
  });

  it("should return false for non-string input", () => {
    expect(isValidHex(null)).toBe(false);
    expect(isValidHex(undefined)).toBe(false);
    expect(isValidHex(123)).toBe(false);
    expect(isValidHex({})).toBe(false);
    expect(isValidHex([])).toBe(false);
  });
});