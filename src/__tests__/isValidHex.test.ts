import { isValidHex } from "../isValidHex";

const validHexCodes = [
  "#1aa", "#993", "#B20A28", "#009655", "#D5EDD5", "#008149", "#361849", "#51246D",
  "#1B88BF", "#fff", "#65676B", "#222220", "#4A4A4A", "#828282",
  "#F4F5E6", "#ED6322", "#0063AD", "#000", "#4BB543", "#E07116",
  "#fcfcfc", "#1E1E1E", "#E1E1E1", "#0C0C0C", "#12345678"
];

const invalidHexCodes = [
  "000", "#12345", "#gggggg", "#123456789", "##123456", "123456", "zzz", "#abcd", "#36fd5"
];

describe("isValidHex", () => {
  it("should return true for valid hex colors", () => {
    validHexCodes.forEach(hexCode => {
      console.log(`Testing valid hex: ${hexCode}`);  // Debugging log
      expect(isValidHex(hexCode)).toBe(true);
    });
    expect(isValidHex("#000")).toBe(true);
    expect(isValidHex("#ffffff")).toBe(true);
    expect(isValidHex("#123456")).toBe(true);
  });

  it("should return false for invalid hex colors", () => {
    invalidHexCodes.forEach(hexCode => {
      console.log(`Testing invalid hex: ${hexCode}`);  // Debugging log
      expect(isValidHex(hexCode)).toBe(false);
    });
  });

  it("should return false for non-string input", () => {
    expect(isValidHex(null as any)).toBe(false);
    expect(isValidHex(undefined as any)).toBe(false);
    expect(isValidHex(123 as any)).toBe(false);
    expect(isValidHex({} as any)).toBe(false);
    expect(isValidHex([] as any)).toBe(false);
  });
});
