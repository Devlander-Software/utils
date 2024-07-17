import { extractKeysAndValues } from "../extractKeysAndValues";

describe("extractKeysAndValues", () => {
  test("extracts keys and values from a record with default type", () => {
    const exampleRecord = {
      name: "Alice",
      age: 25,
      city: "Wonderland",
    };

    const result = extractKeysAndValues(exampleRecord);
    expect(result.keys).toEqual(["name", "age", "city"]);
    expect(result.values).toEqual(["Alice", 25, "Wonderland"]);
  });

  test("extracts keys and values from a record with custom type", () => {
    interface CustomRecord extends Record<string, unknown> {
      id: number;
      title: string;
      completed: boolean;
    }

    const customRecord: CustomRecord = {
      id: 1,
      title: "Learn TypeScript",
      completed: true,
    };

    const result = extractKeysAndValues<CustomRecord>(customRecord);
    expect(result.keys).toEqual(["id", "title", "completed"]);
    expect(result.values).toEqual([1, "Learn TypeScript", true]);
  });

  test("handles an empty record", () => {
    const emptyRecord = {};

    const result = extractKeysAndValues(emptyRecord);
    expect(result.keys).toEqual([]);
    expect(result.values).toEqual([]);
  });

  test("handles a record with mixed value types", () => {
    const mixedRecord = {
      stringKey: "stringValue",
      numberKey: 123,
      booleanKey: true,
      nullKey: null,
      undefinedKey: undefined,
    };

    const result = extractKeysAndValues(mixedRecord);
    expect(result.keys).toEqual([
      "stringKey",
      "numberKey",
      "booleanKey",
      "nullKey",
      "undefinedKey",
    ]);
    expect(result.values).toEqual(["stringValue", 123, true, null, undefined]);
  });

  test("works with nested objects", () => {
    const nestedRecord = {
      outerKey: {
        innerKey: "innerValue",
      },
    };

    const result = extractKeysAndValues(nestedRecord);
    expect(result.keys).toEqual(["outerKey"]);
    expect(result.values).toEqual([{ innerKey: "innerValue" }]);
  });
});
