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
