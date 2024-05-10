import { getMessageFromObject } from "../getMessageFromObject";

describe("getMessageFromObject", () => {
  it("should return the message containing the field value", () => {
    const obj = {
      message: ["Error: Invalid input", "Error: Field is required"],
    };

    const result = getMessageFromObject("Invalid input", obj);

    expect(result).toBe("Error: Invalid input");
  });

  it("should return null if the field value is not found", () => {
    const obj = {
      message: ["Error: Invalid input", "Error: Field is required"],
    };

    const result = getMessageFromObject("Not found", obj);

    expect(result).toBeNull();
  });

  it("should return null if the error object is empty", () => {
    const obj = {};

    const result = getMessageFromObject("Invalid input", obj);

    expect(result).toBeNull();
  });

  it("should return null if the error object does not have the specified field name", () => {
    const obj = {
      error: ["Error: Invalid input", "Error: Field is required"],
    };

    const result = getMessageFromObject("Invalid input", obj);

    expect(result).toBeNull();
  });

  it("should return null if the messages array is not an array", () => {
    const obj = {
      message: "Error: Invalid input",
    };

    const result = getMessageFromObject("Invalid input", obj);

    expect(result).toBeNull();
  });
});
