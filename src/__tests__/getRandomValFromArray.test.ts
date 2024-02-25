import { getRandomValFromArray } from "../getRandomValFromArray";

describe("getRandomValFromArray", () => {
  it("should return the fallback value if the array is empty", () => {
    const arr: number[] = [];
    const fallbackValue = 0;

    const result = getRandomValFromArray(arr, fallbackValue);

    expect(result).toBe(fallbackValue);
  });

  it("should return a random value from the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const fallbackValue = 0;

    const result = getRandomValFromArray(arr, fallbackValue);

    expect(arr).toContain(result);
  });

  it("should return the fallback value if the array contains only undefined values", () => {
    const arr: (number | undefined)[] = [undefined, undefined, undefined];
    const fallbackValue = 0;

    const result = getRandomValFromArray(arr, fallbackValue);

    expect(result).toBe(fallbackValue);
  });
});
