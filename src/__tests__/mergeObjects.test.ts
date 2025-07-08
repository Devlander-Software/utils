import { mergeObjects } from "../object-manipulation/mergeObjects";

describe("mergeObjects", () => {
  it("should merge two objects with nested properties", () => {
    const oldObj = {
      key1: "value1",
      key2: {
        nestedKey1: "nestedValue1",
        nestedKey2: "nestedValue2",
      },
    };

    const newObj = {
      key2: {
        nestedKey2: "updatedNestedValue2",
        nestedKey3: "nestedValue3",
      },
      key3: "value3",
    };

    const expected = {
      key1: "value1",
      key2: {
        nestedKey1: "nestedValue1",
        nestedKey2: "updatedNestedValue2",
        nestedKey3: "nestedValue3",
      },
      key3: "value3",
    };

    expect(mergeObjects(oldObj, newObj)).toEqual(expected);
  });

  it("should merge two objects with arrays", () => {
    const oldObj = {
      key1: "value1",
      key2: ["item1", "item2"],
    };

    const newObj = {
      key2: ["item3", "item4"],
      key3: "value3",
    };

    const expected = {
      key1: "value1",
      key2: ["item1", "item2", "item3", "item4"],
      key3: "value3",
    };

    expect(mergeObjects(oldObj, newObj)).toEqual(expected);
  });

  it("should overwrite existing properties with non-object values", () => {
    const oldObj = {
      key1: "value1",
      key2: {
        nestedKey1: "nestedValue1",
        nestedKey2: "nestedValue2",
      },
    };

    const newObj = {
      key2: "updatedValue2",
      key3: "value3",
    };

    const expected = {
      key1: "value1",
      key2: "updatedValue2",
      key3: "value3",
    };

    expect(mergeObjects(oldObj, newObj)).toEqual(expected);
  });

  it("should handle empty objects", () => {
    const oldObj = {};

    const newObj = {
      key1: "value1",
      key2: {
        nestedKey1: "nestedValue1",
      },
    };

    const expected = {
      key1: "value1",
      key2: {
        nestedKey1: "nestedValue1",
      },
    };

    expect(mergeObjects(oldObj, newObj)).toEqual(expected);
  });
});
