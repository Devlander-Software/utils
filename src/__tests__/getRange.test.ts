import { getRange } from "../array-operations/getRange";

describe("getRange", () => {
  it("should return an array of numbers starting from the specified start value", () => {
    const start = 1;
    const count = 5;
    const result = getRange(start, count);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return an empty array when count is 0", () => {
    const start = 1;
    const count = 0;
    const result = getRange(start, count);
    expect(result).toEqual([]);
  });

  it("should return an empty array when count is negative", () => {
    const start = 1;
    const count = -5;
    const result = getRange(start, count);
    expect(result).toEqual([]);
  });
});
