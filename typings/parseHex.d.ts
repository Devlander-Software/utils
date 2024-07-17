export interface HexObject {
    r: string;
    g: string;
    b: string;
    a: string;
}
export declare const parseHex: (hexString: string) => HexObject;
