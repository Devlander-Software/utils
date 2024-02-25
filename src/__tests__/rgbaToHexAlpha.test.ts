import { RGBAToHexAlpha } from "../rgbaToHexAlpha";

describe("RGBAToHexAlpha", () => {
  it("should convert RGBA to hex with alpha", () => {
    const rgba = "rgba(255, 0, 0, 0.5)";
    const expectedHex = "#ff000080";

    const result = RGBAToHexAlpha(rgba);

    expect(result).toBe(expectedHex);
  });

  it("should convert RGBA to hex without alpha when forceRemoveAlpha is true", () => {
    const rgba = "rgba(255, 0, 0, 0.5)";
    const expectedHex = "#ff0000";

    const result = RGBAToHexAlpha(rgba, true);

    expect(result).toBe(expectedHex);
  });

  it("should throw an error for invalid RGBA input", () => {
    const rgba = "invalid-rgba";

    expect(() => {
      RGBAToHexAlpha(rgba);
    }).toThrow("Invalid RGBA/RGB input");
  });
});
