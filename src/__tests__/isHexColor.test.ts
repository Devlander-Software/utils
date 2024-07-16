import { isHexColor } from "../isHexColor";

describe('isHexColor', () => {
  const validHexCodes = [
    "#1aa", "#993", "#B20A28", "#009655", "#D5EDD5", "#008149", "#361849", "#51246D",
    "#1B88BF", "#fff", "#65676B", "#222220", "#4A4A4A", "#828282",
    "#F4F5E6", "#ED6322", "#0063AD", "#000", "#4BB543", "#E07116",
    "#fcfcfc", "#1E1E1E", "#E1E1E1", "#0C0C0C", "#12345678", "#abcd"
  ];

  const invalidHexCodes = [
    "000", "#12345", "#gggggg", "#123456789", "##123456", "zzz", "#36fd5"
  ];

  it('returns true for valid hex colors', () => {
    validHexCodes.forEach(hexCode => {
      expect(isHexColor(hexCode)).toBe(true);
    });
  });

  it('returns false for invalid hex colors', () => {
    invalidHexCodes.forEach(hexCode => {
      expect(isHexColor(hexCode)).toBe(false);
    });
  });

  it('returns false for non-string input', () => {
    expect(isHexColor(null as any)).toBe(false);
    expect(isHexColor(undefined as any)).toBe(false);
    expect(isHexColor(123 as any)).toBe(false);
    expect(isHexColor({} as any)).toBe(false);
    expect(isHexColor([] as any)).toBe(false);
  });
});
