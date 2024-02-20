import { ensureValidStyle } from "../ensureValidStyle";



// These are the tests that are failing.

// ● ensureValidStyle › should add semicolons at the end of each CSS property if missing

// expect(received).toBe(expected) // Object.is equality

// Expected: "border-width: 1px; color: red; font-size: 16px;"
// Received: "border-width: 1px; color: red; font-size: 16px"

// ● ensureValidStyle › should fix missing colons and semicolons in the CSS string

// expect(received).toBe(expected) // Object.is equality

// Expected: "color: red; font-size: 16px;"
// Received: "color: : red; font-size 16px;"

describe("ensureValidStyle", () => {
  it("should return the same CSS string if it is already valid", () => {
    const cssString = "color: red; font-size: 16px;";

    const result = ensureValidStyle(cssString);

    expect(result).toBe(cssString);
  });

  it("should fix missing colons and semicolons in the CSS string", () => {
    const cssString = "color: red; font-size 16px";
    const expectedFixedCSS = "color: red; font-size: 16px;";

    const result = ensureValidStyle(cssString);

    expect(result).toBe(expectedFixedCSS);
  });

  it("should add semicolons at the end of each CSS property if missing", () => {
    const cssString = "border-width: 1px; color: red; font-size: 16px";
    const expectedFixedCSS = "border-width: 1px; color: red; font-size: 16px;";

    const result = ensureValidStyle(cssString);

    expect(result).toBe(expectedFixedCSS);
  });

  // Add more test cases for other potential fixes
});