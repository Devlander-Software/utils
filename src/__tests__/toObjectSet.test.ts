import { toObjectSet } from "../toObjectSet";

describe("toObjectSet", () => {
  it("should convert an array of strings to an object set", () => {
    const array = ["apple", "banana", "cherry"];
    const delimiter = ",";
    const result = toObjectSet(array, delimiter);
    const expected = {
      apple: true,
      banana: true,
      cherry: true,
    };
    expect(result).toEqual(expected);
  });

  it("should convert a string with delimiter to an object set", () => {
    const arrayOrString = "apple,banana,cherry";
    const delimiter = ",";
    const result = toObjectSet(arrayOrString, delimiter);
    const expected = {
      apple: true,
      banana: true,
      cherry: true,
    };
    expect(result).toEqual(expected);
  });

  it("should return an empty object if the input is an empty array", () => {
    const array: string | unknown[] = [];
    const delimiter = ",";
    const result = toObjectSet(array, delimiter);
    const expected = {};
    expect(result).toEqual(expected);
  });

  it("should return an empty object if the input is an empty string", () => {
    const arrayOrString = "";
    const delimiter = ",";
    const result = toObjectSet(arrayOrString, delimiter);
    const expected = {};
    expect(result).toEqual(expected);
  });
});
