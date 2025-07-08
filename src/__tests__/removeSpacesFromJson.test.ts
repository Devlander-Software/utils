import { removeSpacesFromJson } from "../string-manipulation/removeSpacesFromJson";

describe("removeSpacesFromJson", () => {
  it("should remove spaces from a JSON string", () => {
    const jsonInput = `{
      "name": "John Doe",
      "age": 30,
      "address": {
        "street": "123 Main St",
        "city": "New York"
      }
    }`;

    const expected = {
      name: "JohnDoe",
      age: 30,
      address: {
        street: "123MainSt",
        city: "NewYork",
      },
    };

    const result = removeSpacesFromJson(jsonInput);
    expect(result).toEqual(expected);
  });

  it("should remove spaces from a JSON object", () => {
    const jsonInput = {
      name: "John Doe",
      age: 30,
      address: {
        street: "123 Main St",
        city: "New York",
      },
    };

    const expected = {
      name: "JohnDoe",
      age: 30,
      address: {
        street: "123MainSt",
        city: "NewYork",
      },
    };

    const result = removeSpacesFromJson(jsonInput);
    expect(result).toEqual(expected);
  });

  it("should throw an error for invalid JSON input", () => {
    const jsonInput = "invalid json";

    expect(() => {
      removeSpacesFromJson(jsonInput);
    }).toThrow("Invalid JSON input.");
  });
});
