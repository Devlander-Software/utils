import { hexToRgba } from "../hexToRgba";

const uniqueHexColors = [
  "#B20A28", "#009655", "#D5EDD5", "#008149", "#361849", "#51246D",
  "#1B88BF", "#fff", "#65676B", "#222220", "#4A4A4A", "#828282",
  "#F4F5E6", "#ED6322", "#0063AD", "#000", "#4BB543", "#E07116",
  "#fcfcfc", "#1E1E1E", "#E1E1E1", "#0C0C0C"
];

describe('hexToRgba', () => {
  uniqueHexColors.forEach(color => {
    test(`converts hex color ${color} to rgba`, () => {
      const rgba = hexToRgba(color);
      expect(rgba).toMatch(/rgba\(\d+, \d+, \d+, 1\)/);
    });

    test(`converts hex color ${color} to rgba with alpha`, () => {
      const alpha = '0.5';
      const rgbaWithAlpha = hexToRgba(color, alpha);
      expect(rgbaWithAlpha).toMatch(/rgba\(\d+, \d+, \d+, 0.5\)/);
    });
  });

  test('handles invalid hex color gracefully', () => {
    expect(() => hexToRgba('xyz')).toThrow('Invalid hex color');
  });

 
});
