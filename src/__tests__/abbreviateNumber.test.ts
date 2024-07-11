import { abbreviateNumber, AbbreviateNumberSuffix } from "../abbreviateNumber";

describe("abbreviateNumber", () => {
  it("should return the same value if it is less than 1000", () => {
    const value = 500;
    const result = abbreviateNumber(value);
    expect(result).toBe("500");
  });

  it("should abbreviate the number with 'K' suffix if it is between 1000 and 999999", () => {
    const value = 1500;
    const result = abbreviateNumber(value, { case: 'upper' });
    expect(result).toBe("1.5K");
  });

  it("should abbreviate the number with 'M' suffix if it is between 1000000 and 999999999", () => {
    const value = 2500000;
    const result = abbreviateNumber(value, { case: 'upper' });
    expect(result).toBe("2.5M");
  });

  it("should abbreviate the number with 'B' suffix if it is between 1000000000 and 999999999999", () => {
    const value = 3500000000;
    const result = abbreviateNumber(value, { case: 'upper' });
    expect(result).toBe("3.5B");
  });

  it("should abbreviate the number with 'T' suffix if it is greater than or equal to 1000000000000", () => {
    const value = 5000000000000;
    const result = abbreviateNumber(value, { case: 'upper' });
    expect(result).toBe("5.0T");
  });

  it("should abbreviate the number with lowercase suffix if 'lower' option is provided", () => {
    const value = 2500000;
    const result = abbreviateNumber(value, { case: 'lower' });
    expect(result).toBe("2.5m");
  });

  it("should return an empty string if the value is undefined", () => {
    const value = undefined;
    const result = abbreviateNumber(value);
    expect(result).toBe("");
  });

  it("should return 'Invalid input' if the value is not a valid number", () => {
    const value = "invalid input";
    const result = abbreviateNumber(value);
    expect(result).toBe("Invalid input");
  });

  it("should handle string input correctly", () => {
    const value = "1234";
    const result = abbreviateNumber(value);
    expect(result).toBe("1.2K");
  });

  it("should handle negative numbers correctly", () => {
    const value = -2500000;
    const result = abbreviateNumber(value, { case: 'upper' });
    expect(result).toBe("-2.5M");
  });

  it("should handle large numbers with 'P' suffix correctly", () => {
    const value = 1e15; // 1 quadrillion
    const result = abbreviateNumber(value, { case: 'upper' });
    expect(result).toBe("1.0P");
  });

  it("should handle extremely large numbers with 'E' suffix correctly", () => {
    const value = 1e18; // 1 quintillion
    const result = abbreviateNumber(value, { case: 'upper' });
    expect(result).toBe("1.0E");
  });
});
