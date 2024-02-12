import { pluralize } from "../pluralize";

describe("pluralize", () => {
  it("should return singular when count is 1", () => {
    const count = 1;
    const singular = "apple";
    const plural = "apples";
    const result = pluralize(count, singular, plural);
    expect(result).toBe(singular);
  });

  it("should return plural when count is not 1", () => {
    const count = 5;
    const singular = "apple";
    const plural = "apples";
    const result = pluralize(count, singular, plural);
    expect(result).toBe(plural);
  });
});
