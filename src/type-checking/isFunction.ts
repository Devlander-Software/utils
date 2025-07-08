/* eslint-disable @typescript-eslint/ban-types */
import { typeOfTest } from "./typeToTest";

export function isFunction(value: unknown): value is Function {
  return typeOfTest("function")(value);
}
