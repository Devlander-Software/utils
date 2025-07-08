import { calculatePercentage } from "../mathematical-calculations/calculatePercentage";

describe("calculatePercentage", () => {
  it("should calculate the percentage correctly when partial and whole are numbers", () => {
    const partial = 25;
    const whole = 100;
    const expectedPercentage = 25;

    const result = calculatePercentage(partial, whole);

    expect(result).toBe(expectedPercentage);
  });

  it("should calculate the truncated percentage correctly when truncate is true", () => {
    const partial = 25;
    const whole = 120;
    const expectedPercentage = Math.trunc((25 / 120) * 100);

    const result = calculatePercentage(partial, whole, true);

    expect(result).toBe(expectedPercentage);
  });

  it("should calculate the non-truncated percentage correctly when truncate is false", () => {
    const partial = 25;
    const whole = 120;
    const expectedPercentage = (25 / 120) * 100;

    const result = calculatePercentage(partial, whole, false);

    expect(result).toBeCloseTo(expectedPercentage);
  });

  it("should calculate the percentage as a floating-point number by default (truncate is false)", () => {
    const partial = 33;
    const whole = 200;
    const expectedPercentage = (33 / 200) * 100;

    const result = calculatePercentage(partial, whole);

    expect(result).toBeCloseTo(expectedPercentage);
  });

  it("should throw an error when partial or whole is not a number", () => {
    const partial = "25";
    const whole = 100;

    expect(() => {
      calculatePercentage(partial as any, whole);
    }).toThrow("Both inputs must be numbers and 'whole' cannot be zero.");
  });

  it("should throw an error when whole is zero", () => {
    const partial = 25;
    const whole = 0;

    expect(() => {
      calculatePercentage(partial, whole);
    }).toThrow("Both inputs must be numbers and 'whole' cannot be zero.");
  });
});
