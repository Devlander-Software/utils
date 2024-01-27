import { abbreviateNumber } from "../abbreviateNumber";

describe("abbreviateNumber", () => {
  it("should return the same value if it is less than 1000", () => {
    const value = 500;
    const result = abbreviateNumber(value);
    expect(result).toBe(value);
  });

  it("should abbreviate the number with 'k' suffix if it is between 1000 and 999999", () => {
    const value = 1500;
    const result = abbreviateNumber(value);
    expect(result).toBe("1.5k");
  });

  it("should abbreviate the number with 'm' suffix if it is between 1000000 and 999999999", () => {
    const value = 2500000;
    const result = abbreviateNumber(value);
    expect(result).toBe("2.5m");
  });

  it("should abbreviate the number with 'b' suffix if it is between 1000000000 and 999999999999", () => {
    const value = 3500000000;
    const result = abbreviateNumber(value);
    expect(result).toBe("3.5b");
  });

  it("should abbreviate the number with 't' suffix if it is greater than or equal to 1000000000000", () => {
    const value = 5000000000000;
    const result = abbreviateNumber(value);
    expect(result).toBe("5t");
  });
});
