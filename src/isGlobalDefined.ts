export type GlobalPayload =
  | typeof globalThis
  | typeof self
  | typeof window
  | typeof global;

export const isGlobalDefined: GlobalPayload = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined"
    ? self
    : typeof window !== "undefined"
      ? window
      : global;
})();
