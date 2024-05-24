import { kindOfTest } from "./kindOfTest";

export function isRegExp(value: unknown): value is RegExp {
  return kindOfTest("RegExp")(value);
}
