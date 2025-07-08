import { isString } from "../type-checking/isString";

describe("isString", () => {
  it("should return true if the value is a string", () => {
    const value = "Hello";
    const result = isString(value);
    expect(result).toBe(true);
  });

  it("should return false if the value is not a string", () => {
    const value = 123;
    const result = isString(value);
    expect(result).toBe(false);
  });
});
