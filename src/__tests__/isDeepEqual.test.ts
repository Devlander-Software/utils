import { isDeepEqual } from "../isDeepEqual";

describe("isDeepEqual", () => {
  it("should return true for equal objects", () => {
    const obj1 = {
      key1: "value1",
      key2: {
        nestedKey1: "nestedValue1",
        nestedKey2: "nestedValue2",
      },
    };

    const obj2 = {
      key1: "value1",
      key2: {
        nestedKey1: "nestedValue1",
        nestedKey2: "nestedValue2",
      },
    };

    expect(isDeepEqual(obj1, obj2)).toBe(true);
  });

  it("should return false for different objects", () => {
    const obj1 = {
      key1: "value1",
      key2: {
        nestedKey1: "nestedValue1",
        nestedKey2: "nestedValue2",
      },
    };

    const obj2 = {
      key1: "value1",
      key2: {
        nestedKey1: "nestedValue1",
        nestedKey2: "updatedNestedValue2",
      },
    };

    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });

  it("should return false for objects with different keys", () => {
    const obj1 = {
      key1: "value1",
      key2: {
        nestedKey1: "nestedValue1",
        nestedKey2: "nestedValue2",
      },
    };

    const obj2 = {
      key1: "value1",
      key3: {
        nestedKey1: "nestedValue1",
        nestedKey2: "nestedValue2",
      },
    };

    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });

  it("should return false for objects with different values", () => {
    const obj1 = {
      key1: "value1",
      key2: {
        nestedKey1: "nestedValue1",
        nestedKey2: "nestedValue2",
      },
    };

    const obj2 = {
      key1: "value1",
      key2: {
        nestedKey1: "nestedValue1",
        nestedKey2: "updatedNestedValue2",
      },
    };

    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });

  it("should return false for objects with different lengths", () => {
    const obj1 = {
      key1: "value1",
      key2: {
        nestedKey1: "nestedValue1",
        nestedKey2: "nestedValue2",
      },
    };

    const obj2 = {
      key1: "value1",
      key2: {
        nestedKey1: "nestedValue1",
        nestedKey2: "nestedValue2",
      },
      key3: "value3",
    };

    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });
});
