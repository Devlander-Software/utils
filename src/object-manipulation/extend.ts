/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { bind } from "./bind";
import { forEach } from "./forEach";
import { isFunction } from "./isFunction";
import { AnyObject } from "./types/value.types";

export const extend = <T, U>(
  a: T,
  b: U,
  thisArg?: AnyObject,
  { allOwnKeys }: { allOwnKeys?: boolean } = {},
): T & U => {
  forEach(
    b,
    (val: unknown, key: keyof U | string | number) => {
      if (thisArg && isFunction(val)) {
        (a as any)[key] = bind<any>(val, thisArg);
      } else {
        (a as any)[key] = val;
      }
    },
    { allOwnKeys },
  );
  return a as T & U;
};
