import { isBoolean } from "../type-checking/isBoolean";
import { isBuffer } from "../type-checking/isBuffer";
import { isDate } from "../type-checking/isDate";
import { isFile } from "../type-checking/isFile";
import { isNumber } from "../type-checking/isNumber";
import { isObject } from "../type-checking/isObject";
import { isUndefined } from "../type-checking/isUndefined";
import { typeOfTest } from "../type-checking/typeToTest";

describe("typeToTest", () => {
  describe("typeOfTest", () => {
    it("should return true if the type matches the thing's type", () => {
      const type = "string";
      const thing = "Hello";
      const result = typeOfTest(type)(thing);
      expect(result).toBe(true);
    });

    it("should return false if the type does not match the thing's type", () => {
      const type = "number";
      const thing = "Hello";
      const result = typeOfTest(type)(thing);
      expect(result).toBe(false);
    });
  });

  describe("isUndefined", () => {
    it("should return true if the value is undefined", () => {
      const value = undefined;
      const result = isUndefined(value);
      expect(result).toBe(true);
    });

    it("should return false if the value is not undefined", () => {
      const value = "Hello";
      const result = isUndefined(value);
      expect(result).toBe(false);
    });
  });

  describe("isBuffer", () => {
    it("should return true if the value is a buffer", () => {
      const value = {
        constructor: {
          isBuffer: () => true,
        },
      };
      const result = isBuffer(value);
      expect(result).toBe(true);
    });

    it("should return false if the value is not a buffer", () => {
      const value = "Hello";
      const result = isBuffer(value as any); // Cast 'value' to 'any' to bypass the type check.
      expect(result).toBe(false);
    });
  });

  describe("isNumber", () => {
    it("should return true if the value is a number", () => {
      const value = 123;
      const result = isNumber(value);
      expect(result).toBe(true);
    });

    it("should return false if the value is not a number", () => {
      const value = "Hello";
      const result = isNumber(value);
      expect(result).toBe(false);
    });
  });

  describe("isObject", () => {
    it("should return true if the value is an object", () => {
      const value: object | null = { name: "John" };
      const result = isObject(value);
      expect(result).toBe(true);
    });

    it("should return false if the value is not an object", () => {
      const value = "Hello";
      const result = isObject(value);
      expect(result).toBe(false);
    });
  });

  describe("isBoolean", () => {
    it("should return true if the value is a boolean", () => {
      const value = true;
      const result = isBoolean(value);
      expect(result).toBe(true);
    });

    it("should return false if the value is not a boolean", () => {
      const value = "Hello";
      const result = isBoolean(value);
      expect(result).toBe(false);
    });
  });

  describe("isDate", () => {
    it("should return true if the value is a date", () => {
      const value = new Date();
      const result = isDate(value);
      expect(result).toBe(true);
    });

    it("should return false if the value is not a date", () => {
      const value = "Hello";
      const result = isDate(value);
      expect(result).toBe(false);
    });
  });

  describe("isFile", () => {
    it("should return true if the value is a file", () => {
      const value = new File([], "test.txt");
      const result = isFile(value);
      expect(result).toBe(true);
    });

    it("should return false if the value is not a file", () => {
      const value = "Hello";
      const result = isFile(value);
      expect(result).toBe(false);
    });
  });
});
