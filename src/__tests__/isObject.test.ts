import { isObject } from "../type-checking/isObject";

describe("isObject", () => {
  test("should return true for an object", () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
  });

  test("should return false for null", () => {
    expect(isObject(null)).toBe(false);
  });

  test("should return false for a number", () => {
    expect(isObject(42)).toBe(false);
  });

  test("should return false for a string", () => {
    expect(isObject("hello")).toBe(false);
  });

  test("should return true for an array", () => {
    expect(isObject([])).toBe(true);
  });

  test("should return false for a function", () => {
    expect(isObject(() => {})).toBe(false);
  });

  test("should return false for a boolean", () => {
    expect(isObject(true)).toBe(false);
    expect(isObject(false)).toBe(false);
  });

  test("should return false for undefined", () => {
    expect(isObject(undefined)).toBe(false);
  });
});
