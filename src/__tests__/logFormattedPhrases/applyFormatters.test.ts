import { applyFormatters } from "../../logFormattedPhrases/applyFormatters";
import {
  PhraseItem,
  PhraseOrderType,
} from "../../logFormattedPhrases/formattedPhrase.types";
import { defaultPhraseOrder } from "../../logFormattedPhrases/getPhraseStylesFromOrder";

describe("applyFormatters", () => {
  it("Expect apply formatters to return correct values", () => {
    const phraseItem: PhraseItem = {
      background: "red",
      color: "blue",
      phrase: "",
    };
    const orderItems: PhraseOrderType[] = defaultPhraseOrder;

    const result = applyFormatters(phraseItem, orderItems);

    // console.log(result, 'result in applyFormatters test');

    const hasBlueForColor = result.some(
      (formatter) => formatter.value === "blue" && formatter.name === "color",
    );

    const hasRedValueForBackground = result.some(
      (formatter) =>
        formatter.value === "red" && formatter.name === "background",
    );
    expect(hasRedValueForBackground).toBe(true);
    expect(hasBlueForColor).toBe(true);
  });
});
