import { toFlatObject } from "../toFlatObject";

describe("toFlatObject", () => {
  test("should flatten properties from source object to destination object", () => {
    const source = { a: 1, b: { c: 2 } };
    const dest = {};
    const result = toFlatObject(source, dest);

    expect(result).toEqual({ a: 1, b: { c: 2 } });
    expect(result).toBe(dest); // Ensure it modifies the dest object in place
  });

  test("should handle null source object", () => {
    const result = toFlatObject(null);
    expect(result).toEqual({});
  });

  test("should apply property filter", () => {
    const source = { a: 1, b: 2, c: 3 };
    const dest = {};
    const propFilter = (prop: string) => prop !== "b";
    const result = toFlatObject(source, dest, undefined, propFilter);

    expect(result).toEqual({ a: 1, c: 3 });
  });

  test("should apply object filter", () => {
    class A {
      a = 1;
    }

    class B extends A {
      b = 2;
    }

    const b = new B();
    const dest = {};
    const filter = (obj: object) => obj === B.prototype;
    const result = toFlatObject(
      b as unknown as Record<string, unknown>,
      dest,
      filter,
    );

    // Ensure prototype properties are correctly filtered out
    expect(result).toEqual({ b: 2 });
  });

  test("should flatten properties from Error object", () => {
    const error = new Error("Test error");
    const result = toFlatObject(error as unknown as Record<string, unknown>);

    expect(result).toHaveProperty("message", "Test error");
    expect(result).toHaveProperty("stack");
  });

  test("should merge properties from multiple prototype levels", () => {
    class A {
      a = 1;
    }

    class B extends A {
      b = 2;
    }

    class C extends B {
      c = 3;
    }

    const c = new C();
    const result = toFlatObject(c as unknown as Record<string, unknown>);

    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  test("should not include Object.prototype properties", () => {
    const source = {};
    const result = toFlatObject(source);

    // Object.prototype properties should not be included
    expect(result).not.toHaveProperty("toString");
    expect(result).not.toHaveProperty("hasOwnProperty");
  });

  test("should handle complex objects with nested structures", () => {
    const source = { a: 1, b: { c: 2, d: { e: 3 } } };
    const result = toFlatObject(source);

    expect(result).toEqual({ a: 1, b: { c: 2, d: { e: 3 } } });
  });

  test("should correctly handle properties that are undefined", () => {
    const source = { a: 1, b: undefined, c: 3 };
    const result = toFlatObject(source);

    expect(result).toEqual({ a: 1, b: undefined, c: 3 });
  });

  test("should not overwrite properties in destination object that already exist", () => {
    const source = { a: 1, b: 2 };
    const dest = { b: 3, c: 4 };
    const result = toFlatObject(source, dest);

    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });

  test("should handle objects with no enumerable properties", () => {
    const source = Object.create(null);
    const result = toFlatObject(source);

    expect(result).toEqual({});
  });

  test("should apply both object filter and property filter together", () => {
    const source = { a: 1, b: 2, c: 3 };
    const dest = {};
    const filter = (obj: object) => true;
    const propFilter = (prop: string) => prop !== "b";

    const result = toFlatObject(source, dest, filter, propFilter);

    expect(result).toEqual({ a: 1, c: 3 });
  });
});
