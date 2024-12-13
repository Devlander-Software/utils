export declare enum ProtocolPrefixEnum {
    HTTPS = "https://",
    HTTP = "http://",
    NONE = ""
}
export type ProtocolPrefix = `${ProtocolPrefixEnum}` | ProtocolPrefixEnum;
interface GenerateAllowedOriginsOptions {
    includeWww?: boolean;
    validateDomains?: boolean;
}
/**
 * Generates an array of allowed origin URLs based on the provided domains and prefixes.
 *
 * @param domains - An array of domain strings.
 * @param prefixes - An array of URL prefixes.
 * @param options - Options to customize the generation.
 * @returns An array of unique, fully qualified URLs.
 */
export declare const generateAllowedOrigins: (domains: string[], prefixes?: ProtocolPrefix[], options?: GenerateAllowedOriginsOptions) => string[];
export {};
