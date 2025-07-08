import { removeNewLinesFromJson } from "../string-manipulation/removeNewLinesFromJson";

describe("removeNewLinesFromJson", () => {
  it("should remove new lines from a JSON string", () => {
    const jsonInput = `{
      "name": "John",
      "age": 30,
      "address": {
        "street": "123 Main St",
        "city": "New York"
      }
    }`;

    const expected = {
      name: "John",
      age: 30,
      address: {
        street: "123 Main St",
        city: "New York",
      },
    };

    const result = removeNewLinesFromJson(jsonInput);
    expect(result).toEqual(expected);
  });

  it("should remove new lines from a JSON object", () => {
    const jsonInput = {
      name: "John",
      age: 30,
      address: {
        street: "123 Main St",
        city: "New York",
      },
    };

    const expected = {
      name: "John",
      age: 30,
      address: {
        street: "123 Main St",
        city: "New York",
      },
    };

    const result = removeNewLinesFromJson(jsonInput);
    expect(result).toEqual(expected);
  });
});
