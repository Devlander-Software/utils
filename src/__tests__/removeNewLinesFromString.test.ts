import { removeNewLinesFromString } from "../removeNewLinesFromString";

describe("removeNewLinesFromString", () => {
  it("should remove new lines from a string", () => {
    const inputString = "Hello\nWorld";
    const expected = "HelloWorld";
    const result = removeNewLinesFromString(inputString);
    expect(result).toBe(expected);
  });

  it("should handle a string without new lines", () => {
    const inputString = "Hello World";
    const expected = "Hello World";
    const result = removeNewLinesFromString(inputString);
    expect(result).toBe(expected);
  });

  it("should handle multiple new lines in a string", () => {
    const inputString = "Line 1\nLine 2\nLine 3";
    const expected = "Line 1Line 2Line 3";
    const result = removeNewLinesFromString(inputString);
    expect(result).toBe(expected);
  });

  it("should handle an empty string", () => {
    const inputString = "";
    const expected = "";
    const result = removeNewLinesFromString(inputString);
    expect(result).toBe(expected);
  });
});