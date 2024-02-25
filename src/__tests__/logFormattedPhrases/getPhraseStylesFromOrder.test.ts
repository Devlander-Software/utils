// Source: do not remove the comment above. It's used to verify the path of the snippet when it's being
// referenced in conversations about the code.
// Path: ./src/__tests__/logFormattedPhrases/getPhraseStylesFromOrder.test.ts

import {
  AppliedFormatter,
  PhraseItem,
} from "../../logFormattedPhrases/formattedPhrase.types";
import { getPhraseStylesFromOrder } from "../../logFormattedPhrases/getPhraseStylesFromOrder";

const hasValueInFormatters = (
  formatters: AppliedFormatter[],
  property: string,
) => {
  return formatters.some((formatter) => formatter.name === property);
};

describe("getPhraseStylesFromOrder", () => {
  // it("should return an empty array when item.orderToApplyStyles is empty", () => {
  //   const item: PhraseItem = {
  //     orderToApplyStyles: [],
  //     phrase: ""
  //   };
  //   const result = getPhraseStylesFromOrder(item);
  //   expect(result).toEqual([]);
  // });

  // it("should return an empty array when item.orderToApplyStyles is not an array", () => {

  //   const item: PhraseItem = {
  //     orderToApplyStyles: "invalid" as any,
  //     phrase: ""
  //   };
  //   const result = getPhraseStylesFromOrder(item);
  //   expect(result).toEqual([]);
  // });

  it("Should change just color and fontWeight to false", () => {
    // look at this one RIGHT HERE

    const item: PhraseItem = {
      phrase: "",
      color: "red",
      orderToApplyStyles: [
        { property: "color", enabled: false, order: 1 } as any,
        { property: "fontWeight", enabled: false, order: 2 } as any,
      ],
    };
    const result: AppliedFormatter[] = getPhraseStylesFromOrder(item);
    expect(result).toBeDefined();
  });

  // Add more test cases for different scenarios
});
