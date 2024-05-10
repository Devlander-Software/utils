import { GetAspectRatioParams, getAspectRatio } from "../getAspectRatio";

describe("getAspectRatio", () => {
  it("should calculate the correct height for landscape orientation", () => {
    const params: GetAspectRatioParams = {
      width: 1920,
      orientation: "landscape",
      aspectRatio: "16:9",
    };

    const result = getAspectRatio(params);

    expect(result.width).toBe(1920);
    expect(result.height).toBe(1080);
  });

  it("should calculate the correct height for portrait orientation", () => {
    const params: GetAspectRatioParams = {
      width: 1080,
      orientation: "portrait",
      aspectRatio: "16:9",
    };

    const result = getAspectRatio(params);

    expect(result.width).toBe(1080);
    expect(result.height).toBe(608);
  });
});
