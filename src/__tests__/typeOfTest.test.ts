import { typeOfTest } from "../typeToTest";

describe('typeOfTest', () => {
  test('should return true for correct type', () => {
    const isString = typeOfTest("string");
    expect(isString("hello")).toBe(true);
    const isNumber = typeOfTest("number");
    expect(isNumber(123)).toBe(true);
    const isBoolean = typeOfTest("boolean");
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    const isObject = typeOfTest("object");
    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(true);  // Arrays are also of type "object"
    const isFunction = typeOfTest("function");
    expect(isFunction(() => {})).toBe(true);
    const isUndefined = typeOfTest("undefined");
    expect(isUndefined(undefined)).toBe(true);
    const isSymbol = typeOfTest("symbol");
    expect(isSymbol(Symbol())).toBe(true);
  });

  test('should return false for incorrect type', () => {
    const isString = typeOfTest("string");
    expect(isString(123)).toBe(false);
    const isNumber = typeOfTest("number");
    expect(isNumber("hello")).toBe(false);
    const isBoolean = typeOfTest("boolean");
    expect(isBoolean(123)).toBe(false);
    const isObject = typeOfTest("object");
    expect(isObject("hello")).toBe(false);
    const isFunction = typeOfTest("function");
    expect(isFunction({})).toBe(false);
    const isUndefined = typeOfTest("undefined");
    expect(isUndefined(null)).toBe(false);
    const isSymbol = typeOfTest("symbol");
    expect(isSymbol("hello")).toBe(false);
  });
});
