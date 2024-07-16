import { HexObject } from "./parseHex";

export const hexToDecimal = (hex: string): number => {
    return parseInt(hex, 16);
  };
  
  export interface HexDecimalObject {
    r: number;
    g: number;
    b: number;
    a: number;
  }
  
  export const hexesToDecimals = ({ r, g, b, a }: HexObject): HexDecimalObject => {
    return {
      r: hexToDecimal(r),
      g: hexToDecimal(g),
      b: hexToDecimal(b),
      a: +(hexToDecimal(a) / 255).toFixed(2)
    };
  };