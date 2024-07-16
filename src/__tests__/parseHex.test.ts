import { parseHex } from "../parseHex";

const uniqueHexColors = [
  "#B20A28", "#009655", "#D5EDD5", "#008149", "#361849", "#51246D",
  "#1B88BF", "#fff", "#65676B", "#222220", "#4A4A4A", "#828282",
  "#F4F5E6", "#ED6322", "#0063AD", "#000", "#4BB543", "#E07116",
  "#fcfcfc", "#1E1E1E", "#E1E1E1", "#0C0C0C"
];

describe('parseHex', () => {
  it('parses short hex color correctly', () => {
    expect(parseHex('1aa')).toEqual({ r: '11', g: 'aa', b: 'aa', a: 'ff' });
    expect(parseHex('abcd')).toEqual({ r: 'aa', g: 'bb', b: 'cc', a: 'dd' });
  });

  it('parses long hex color correctly', () => {
    expect(parseHex('123456')).toEqual({ r: '12', g: '34', b: '56', a: 'ff' });
    expect(parseHex('12345678')).toEqual({ r: '12', g: '34', b: '56', a: '78' });
  });

  it('parses unique hex colors correctly', () => {
    uniqueHexColors.forEach(color => {
      const hashlessColor = color.replace(/^#/, '');
      let expected = { r: '', g: '', b: '', a: '' };

      switch (hashlessColor.length) {
        case 3:
          expected = {
            r: hashlessColor[0].repeat(2),
            g: hashlessColor[1].repeat(2),
            b: hashlessColor[2].repeat(2),
            a: 'ff'
          };
          break;
        case 6:
          expected = {
            r: hashlessColor.slice(0, 2),
            g: hashlessColor.slice(2, 4),
            b: hashlessColor.slice(4, 6),
            a: 'ff'
          };
          break;
        default:
          throw new Error(`Unexpected color format for: ${color}`);
      }

      expect(parseHex(hashlessColor)).toEqual(expected);
    });
  });

  it('throws an error for invalid hex colors', () => {
    expect(() => parseHex('12345')).toThrow('Invalid hex color');
    expect(() => parseHex('gggggg')).toThrow('Invalid hex color');
    expect(() => parseHex('xyz')).toThrow('Invalid hex color');
  });

  it('throws an error for non-hex input', () => {
    expect(() => parseHex('')).toThrow('Invalid hex color');
    expect(() => parseHex(null as any)).toThrow('Invalid hex color');
    expect(() => parseHex(undefined as any)).toThrow('Invalid hex color');
  });
});
