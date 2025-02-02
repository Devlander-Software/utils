import { getAverage } from "../getAverage";

describe("getAverage", () => {
  it("should throw an error for an empty array", () => {
    expect(() => {
      getAverage([]);
    }).toThrow("Input must be a non-empty array of numbers.");
  });

  it("should throw an error if the input is not an array", () => {
    expect(() => {
      getAverage(null as any);
    }).toThrow("Input must be a non-empty array of numbers.");

    expect(() => {
      getAverage(undefined as any);
    }).toThrow("Input must be a non-empty array of numbers.");
  });

  it("should throw an error if the array contains non-numeric values", () => {
    expect(() => {
      getAverage([1, 2, "a"] as any);
    }).toThrow("All elements in the array must be valid numbers.");

    expect(() => {
      getAverage([1, NaN, 3]);
    }).toThrow("All elements in the array must be valid numbers.");
  });

  it("should correctly calculate the average of numeric values", () => {
    expect(getAverage([1, 2, 3])).toBe(2);
    expect(getAverage([10, 20, 30, 40])).toBe(25);
  });
});
