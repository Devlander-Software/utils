export interface GetAspectRatioParams {
    width: number;
    aspectRatio?: AspectRatioType;
    orientation?: 'landscape' | 'portrait';
}
export declare enum AspectRatioEnum {
    '4:3' = "4:3",
    '16:9' = "16:9",
    '1:1' = "1:1",
    '3:2' = "3:2",
    '8:5' = "8:5"
}
export type AspectRatioType = keyof typeof AspectRatioEnum;
export interface GetAspectRatioResult {
    height: number;
    width: number;
}
export declare const getAspectRatio: (params: GetAspectRatioParams) => GetAspectRatioResult;
