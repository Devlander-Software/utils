import { kindOf } from "./kindOf";

export const kindOfTest = (type: string) => {
  type = type.toLowerCase();
  return (thing: unknown) => kindOf(thing) === type;
};
