import { HexDecimalObject } from "./hexToDecimals";
import { isNumeric } from "./isNumeric";

export const formatDecimalObjectToRgba = (decimalObject: HexDecimalObject, parameterA?: string): string => {
    const { r, g, b, a: parsedA } = decimalObject;
    const a = parameterA !== undefined && isNumeric(parameterA) ? parseFloat(parameterA) : parsedA;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };
  