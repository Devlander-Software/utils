import { GlobalPayload, isGlobalDefined } from "./isGlobalDefined";
import { isUndefined } from "./isUndefined";

export const isContextDefined = (context: GlobalPayload) =>
  !isUndefined(context) && context !== isGlobalDefined;
