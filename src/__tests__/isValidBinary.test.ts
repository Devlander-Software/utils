import { isValidBinary } from "../isValidBinary";

describe("isValidBinary", () => {
  test("returns true for a valid binary number", () => {
    expect(isValidBinary("101010")).toBe(true);
  });

  test("returns false for a binary number with non-binary characters", () => {
    expect(isValidBinary("10102")).toBe(false);
  });

  test("returns false for a string containing non-binary characters", () => {
    expect(isValidBinary("0110102")).toBe(false);
  });

  test('returns true for a single "0" binary digit', () => {
    expect(isValidBinary("0")).toBe(true);
  });

  test('returns true for a single "1" binary digit', () => {
    expect(isValidBinary("1")).toBe(true);
  });

  test("returns false for an empty string", () => {
    expect(isValidBinary("")).toBe(false);
  });

  test("returns false for a string with spaces", () => {
    expect(isValidBinary("10 1010")).toBe(false);
  });

  test("returns true for a longer valid binary number", () => {
    expect(isValidBinary("110101001101001011")).toBe(true);
  });

  test("returns true for a binary number with leading zeros", () => {
    expect(isValidBinary("000101010")).toBe(true);
  });
});
