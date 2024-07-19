import { toFlatObject } from "../toFlatObject";

describe('toFlatObject', () => {
  test('should flatten properties from source object to destination object', () => {
    const source = { a: 1, b: { c: 2 } };
    const dest = {};
    const result = toFlatObject(source, dest);

    expect(result).toEqual({ a: 1, b: { c: 2 } });
    expect(result).toBe(dest); // Ensure it modifies the dest object in place
  });

  test('should handle null source object', () => {
    const result = toFlatObject(null);
    expect(result).toEqual({});
  });

  test('should apply property filter', () => {
    const source = { a: 1, b: 2, c: 3 };
    const dest = {};
    const propFilter = (prop: string) => prop !== 'b';
    const result = toFlatObject(source, dest, undefined, propFilter);

    expect(result).toEqual({ a: 1, c: 3 });
  });

  test('should apply object filter', () => {
    class A {
      a = 1;
    }

    class B extends A {
      b = 2;
    }

    const b = new B();
    const dest = {};
    const filter = (obj: object) => Object.getPrototypeOf(obj) !== A.prototype;
    const result = toFlatObject(b as unknown as Record<string, unknown>, dest, filter);

    // Ensure prototype properties are correctly filtered out
    expect(result).toEqual({ b: 2 });
  });

  test('should flatten properties from Error object', () => {
    const error = new Error('Test error');
    const result = toFlatObject(error as unknown as Record<string, unknown>);

    expect(result).toHaveProperty('message', 'Test error');
    expect(result).toHaveProperty('stack');
  });
});
