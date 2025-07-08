import { isPlainObject } from "../type-checking/isPlainObject";

describe("isPlainObject", () => {
  it("should return true for a plain object", () => {
    const obj = { name: "John", age: 30 };

    const result = isPlainObject(obj);

    expect(result).toBe(true);
  });

  it("should return false for an array", () => {
    const arr = [1, 2, 3];

    const result = isPlainObject(arr);

    expect(result).toBe(false);
  });

  it("should return false for a string", () => {
    const str = "Hello, world!";

    const result = isPlainObject(str);

    expect(result).toBe(false);
  });

  it("should return false for a number", () => {
    const num = 42;

    const result = isPlainObject(num);

    expect(result).toBe(false);
  });

  it("should return false for null", () => {
    const value = null;

    const result = isPlainObject(value);

    expect(result).toBe(false);
  });

  it("should return false for undefined", () => {
    const value = undefined;

    const result = isPlainObject(value);

    expect(result).toBe(false);
  });
});
