import { composeLabelFromItems, ListConjunction, MultipleItemsLabelPrefix, SingleItemLabelPrefix } from "../composeLabelFromParts";

interface Product {
  name: string;
}

describe("composeLabelFromItems", () => {
  const products: Product[] = [
    { name: "Apple" },
    { name: "Banana" },
    { name: "Cherry" },
  ];

  it("should return single item label with default prefix", () => {
    const result = composeLabelFromItems({
      items: [{ name: "Apple" }],
      labelKey: "name",
    });
    expect(result).toBe("Only Apple:");
  });

  it("should return single item label with custom prefix", () => {
    const result = composeLabelFromItems({
      items: [{ name: "Apple" }],
      labelKey: "name",
      singleItemPrefix: "Solely",
    });
    expect(result).toBe("Solely in Apple:");
  });

  it("should return multiple items label with default prefix and conjunction", () => {
    const result = composeLabelFromItems({
      items: products,
      labelKey: "name",
    });
    expect(result).toBe("Found in Apple, Banana, and Cherry:");
  });

  it("should return multiple items label with custom prefix and conjunction", () => {
    const result = composeLabelFromItems({
      items: products,
      labelKey: "name",
      multipleItemsPrefix: "IncludedIn",
      conjunctionWord: "AsWellAs",
    });
    expect(result).toBe("Included in Apple, Banana, as well as Cherry:");
  });

  it("should handle single item with custom singleItemPrefix as enum", () => {
    const result = composeLabelFromItems({
      items: [{ name: "Apple" }],
      labelKey: "name",
      singleItemPrefix: SingleItemLabelPrefix.Exclusive,
    });
    expect(result).toBe("Exclusive to Apple:");
  });

  it("should handle multiple items with custom multipleItemsPrefix and conjunction as enum", () => {
    const result = composeLabelFromItems({
      items: products,
      labelKey: "name",
      multipleItemsPrefix: MultipleItemsLabelPrefix.PresentIn,
      conjunctionWord: ListConjunction.AlongWith,
    });
    expect(result).toBe("Present in Apple, Banana, along with Cherry:");
  });

  it("should return an empty string if items array is empty", () => {
    const result = composeLabelFromItems({
      items: [],
      labelKey: "name",
    });
    expect(result).toBe("");
  });


});
