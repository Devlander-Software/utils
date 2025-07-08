import { dashToCamelCase } from "../string-manipulation/dashToCamelCase";

describe("dashToCamelCase", () => {
  it("should convert a dash-case string to camelCase", () => {
    const input = "hello-world";
    const expectedOutput = "helloWorld";
    const result = dashToCamelCase(input);
    expect(result).toBe(expectedOutput);
  });

  it("should convert a single character dash-case string to camelCase", () => {
    const input = "a-b-c";
    const expectedOutput = "aBC";
    const result = dashToCamelCase(input);
    expect(result).toBe(expectedOutput);
  });

  it("should convert a dash-case string with multiple dashes to camelCase", () => {
    const input = "this-is-a-test";
    const expectedOutput = "thisIsATest";
    const result = dashToCamelCase(input);
    expect(result).toBe(expectedOutput);
  });

  it("should convert a dash-case string with leading and trailing dashes to camelCase", () => {
    const input = "-hello-world-";
    const expectedOutput = "helloWorld";
    const result = dashToCamelCase(input);
    expect(result).toBe(expectedOutput);
  });

  it("should convert an empty string to an empty camelCase string", () => {
    const input = "";
    const expectedOutput = "";
    const result = dashToCamelCase(input);
    expect(result).toBe(expectedOutput);
  });
});
