import { hslToRgb } from "../hslToRgb";

describe("hslToRgb", () => {
  it("should convert HSL values to RGB correctly", () => {
    // Test case 1
    let h = 0;
    let s = 100;
    let l = 50;
    let expectedRgb = [255, 0, 0];
    let result = hslToRgb(h, s, l);
    expect(result).toEqual(expectedRgb);

    // Test case 2
    h = 120;
    s = 100;
    l = 50;
    expectedRgb = [0, 255, 0];
    result = hslToRgb(h, s, l);
    expect(result).toEqual(expectedRgb);

    // Test case 3
    h = 240;
    s = 100;
    l = 50;
    expectedRgb = [0, 0, 255];
    result = hslToRgb(h, s, l);
    expect(result).toEqual(expectedRgb);

    // Add more test cases as needed
  });
});
