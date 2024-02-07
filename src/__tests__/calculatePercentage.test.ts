import { calculatePercentage } from "../calculatePercentage";

describe("calculatePercentage", () => {
  it("should calculate the percentage correctly when partial and whole are numbers", () => {
    const partial = 25;
    const whole = 100;
    const expectedPercentage = 25;

    const result = calculatePercentage(partial, whole);

    expect(result).toBe(expectedPercentage);
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
