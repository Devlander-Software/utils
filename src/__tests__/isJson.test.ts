import { isJson } from "../type-checking/isJson";

describe("isJson", () => {
  it("should return true if the input is a valid JSON string", () => {
    const jsonString = '{"name":"John","age":30,"city":"New York"}'; // JSON-valid string
    const expectedJson = {
      name: "John",
      age: 30,
      city: "New York",
    };
    const result = isJson(jsonString);
    console.log(result);
    expect(result).toEqual(expectedJson);
  });

  it("should return false if the input is not a valid JSON string", () => {
    const invalidJsonString = '{"name":"John","age":30,"city":"New York"'; // Missing closing brace
    const result = isJson(invalidJsonString);
    expect(result).toBe(false);
  });
});
