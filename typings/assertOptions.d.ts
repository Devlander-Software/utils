export declare function assertOptions(options: {
    [key: string]: unknown;
} | null, schema: {
    [key: string]: (value: unknown, opt: string, options: {
        [key: string]: unknown;
    }) => boolean | string;
} | null, allowUnknown: boolean): void;
