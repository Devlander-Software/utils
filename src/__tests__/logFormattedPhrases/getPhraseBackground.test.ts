// Mock the module
jest.mock("../../logFormattedPhrases/getPhraseStylesFromOrder", () => ({
  getPhraseStylesFromOrder: jest.fn().mockReturnValue([]),
}));

import * as pico from "picocolors";
import { PhraseColors } from "../../logFormattedPhrases/formattedPhrase.types";
import { getPhraseBackground } from "../../logFormattedPhrases/getPhraseBackground";

describe("getPhraseBackground", () => {
  it("should return the correct background function for a given color", () => {
    const color = "red";
    const expectedFunction = pico.bgRed;

    const result = getPhraseBackground(color);

    expect(result).toBe(expectedFunction);
  });

  it("should return the default background function when color is not found", () => {
    const color = "purple";
    const expectedFunction = pico.bgBlack;

    const result = getPhraseBackground(color as PhraseColors);

    expect(result).toBe(expectedFunction);
  });
});
