import { getValueFromObject } from "../getValueFromObject";

describe("getValueFromObject", () => {
  it("should return the value associated with the given key", () => {
    const obj = {
      name: "John",
      age: 30,
      city: "New York",
    };

    const result = getValueFromObject("age", obj);

    expect(result).toBe(30);
  });

  it("should return null if the key is not found", () => {
    const obj = {
      name: "John",
      age: 30,
      city: "New York",
    };

    const result = getValueFromObject("gender", obj);

    expect(result).toBeNull();
  });
});
