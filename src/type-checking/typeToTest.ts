import { kindOf } from "./kindOf";

export const typeOfTest = (type: string) => {
  type = type.toLowerCase();
  return (thing: unknown) => kindOf(thing) === type;
};
