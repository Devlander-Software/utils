/* eslint-disable @typescript-eslint/no-explicit-any */
type TypeToTest =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "function"
  | "undefined"
  | "symbol";

export const typeOfTest =
  (type: TypeToTest) =>
  (thing: any): boolean =>
    typeof thing === type;

export const isUndefined = typeOfTest("undefined");

export function isBuffer(
  val: { constructor: { isBuffer: (arg0: any) => any } | null } | null,
) {
  return (
    val !== null &&
    !isUndefined(val) &&
    val.constructor !== null &&
    !isUndefined(val.constructor) &&
    isFunction(val.constructor.isBuffer) &&
    val.constructor.isBuffer(val)
  );
}

export function isArrayBufferView(val: { buffer: any }) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}

const kindOfTest = (type: string) => {
  type = type.toLowerCase();
  return (thing: any) => kindOf(thing) === type;
};

const kindOf = ((cache) => (thing: any) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));
const isFunction = typeOfTest("function");

export const isString = typeOfTest("string");
export const isNumber = typeOfTest("number");
export const isObject = (thing: unknown) =>
  thing !== null && typeof thing === "object";
export const isBoolean = (thing: unknown) => thing === true || thing === false;

export const isDate = kindOfTest("Date");
export const isFile = kindOfTest("File");
export const isFormData = (thing: { append: any; toString: () => string }) => {
  let kind;
  return (
    thing &&
    ((typeof FormData === "function" && thing instanceof FormData) ||
      (isFunction(thing.append) &&
        ((kind = kindOf(thing)) === "formdata" ||
          // detect form-data instance
          (kind === "object" &&
            isFunction(thing.toString) &&
            thing.toString() === "[object FormData]"))))
  );
};
const isArrayBuffer = kindOfTest("ArrayBuffer");
