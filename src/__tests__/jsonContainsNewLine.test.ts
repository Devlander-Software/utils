import { jsonContainsNewLine } from "../jsonContainsNewLine";

describe("jsonContainsNewLine", () => {
  it("should return true for a JSON string with newline characters", () => {
    const jsonString = JSON.stringify({
      key1: "value\nwith newline",
      key2: "another value",
    });

    expect(jsonContainsNewLine(jsonString)).toBe(true);
  });

  it("should return true for a JSON object with newline characters", () => {
    const jsonObject = {
      key1: "value\nwith newline",
      key2: "another value",
    };

    expect(jsonContainsNewLine(jsonObject)).toBe(true);
  });

  it("should return false for a JSON string without newline characters", () => {
    const jsonString = JSON.stringify({
      key1: "value without newline",
      key2: "another value",
    });

    expect(jsonContainsNewLine(jsonString)).toBe(false);
  });

  it("should return false for a JSON object without newline characters", () => {
    const jsonObject = {
      key1: "value without newline",
      key2: "another value",
    };

    expect(jsonContainsNewLine(jsonObject)).toBe(false);
  });

  it("should throw an error for invalid JSON strings", () => {
    const invalidJsonString = "{ key: 'value' }"; // Invalid JSON format

    expect(() => jsonContainsNewLine(invalidJsonString)).toThrow(
      "Invalid JSON string.",
    );
  });
});
