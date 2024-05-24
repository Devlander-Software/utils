import { endsWith } from "../endsWith";

describe("endsWith", () => {
  it("should return true if the string ends with the search string", () => {
    const str = "Hello, world!";
    const searchString = "world!";
    const result = endsWith(str, searchString);
    expect(result).toBe(true);
  });

  it("should return false if the string does not end with the search string", () => {
    const str = "Hello, world!";
    const searchString = "Hello";
    const result = endsWith(str, searchString);
    expect(result).toBe(false);
  });

  it("should return true if the string ends with the search string at the specified position", () => {
    const str = "Hello, world!";
    const searchString = "world";
    const position = 7;
    const result = endsWith(str, searchString, position);
    expect(result).toBe(true);
  });

  it("should return false if the string does not end with the search string at the specified position", () => {
    const str = "Hello, world!";
    const searchString = "world";
    const position = 6;
    const result = endsWith(str, searchString, position);
    expect(result).toBe(false);
  });

  it("should return true if the string ends with an empty search string", () => {
    const str = "Hello, world!";
    const searchString = "";
    const result = endsWith(str, searchString);
    expect(result).toBe(true);
  });
});
