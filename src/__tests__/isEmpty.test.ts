import { isEmpty } from "../type-checking/isEmpty";

describe("isEmpty", () => {
  it("should return true for undefined", () => {
    const value = undefined;
    const result = isEmpty(value);
    expect(result).toBe(true);
  });

  it("should return true for null", () => {
    const value = null;
    const result = isEmpty(value);
    expect(result).toBe(true);
  });

  it("should return true for an empty object", () => {
    const value = {};
    const result = isEmpty(value);
    expect(result).toBe(true);
  });

  it("should return true for an empty string", () => {
    const value = "";
    const result = isEmpty(value);
    expect(result).toBe(true);
  });

  it("should return false for a non-empty object", () => {
    const value = { name: "John", age: 30 };
    const result = isEmpty(value);
    expect(result).toBe(false);
  });

  it("should return false for a non-empty string", () => {
    const value = "Hello, world!";
    const result = isEmpty(value);
    expect(result).toBe(false);
  });
});
