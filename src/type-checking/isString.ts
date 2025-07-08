import { typeOfTest } from "./typeToTest";

export function isString(value: unknown): value is string {
  return typeOfTest("string")(value);
}
