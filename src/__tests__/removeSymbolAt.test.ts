import { removeSymbolAt } from "../removeSymbolAt";

describe('removeSymbolAt', () => {
  test('removes the symbol at the specified position', () => {
    expect(removeSymbolAt('#123456', '#', 0)).toBe('123456');
    expect(removeSymbolAt('user@name', '@', 4)).toBe('username');
    expect(removeSymbolAt('$100', '$', 0)).toBe('100');
    expect(removeSymbolAt('100$', '$', 3)).toBe('100');
  });

  test('returns the string unchanged if the symbol is not at the specified position', () => {
    expect(removeSymbolAt('123456', '#', 1)).toBe('123456');
    expect(removeSymbolAt('username@', '@', 3)).toBe('username@');
    expect(removeSymbolAt('100$', '$', 2)).toBe('100$');
  });

  test('returns the string unchanged if the symbol is not found', () => {
    expect(removeSymbolAt('123456', '@', 0)).toBe('123456');
    expect(removeSymbolAt('username', '#', 0)).toBe('username');
    expect(removeSymbolAt('100', '$', 0)).toBe('100');
  });

  test('returns the string unchanged if the string is empty', () => {
    expect(removeSymbolAt('', '#', 0)).toBe('');
    expect(removeSymbolAt('', '@', 0)).toBe('');
    expect(removeSymbolAt('', '$', 0)).toBe('');
  });
});
 