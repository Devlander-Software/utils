import { HexObject } from "./parseHex";
export declare const hexToDecimal: (hex: string) => number;
export interface HexDecimalObject {
    r: number;
    g: number;
    b: number;
    a: number;
}
export declare const hexesToDecimals: ({ r, g, b, a, }: HexObject) => HexDecimalObject;
