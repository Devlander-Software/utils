export enum ProtocolPrefixEnum {
  HTTPS = "https://",
  HTTP = "http://",
  NONE = "",
}

export type ProtocolPrefix = `${ProtocolPrefixEnum}` | ProtocolPrefixEnum;

interface GenerateAllowedOriginsOptions {
  includeWww?: boolean;
  validateDomains?: boolean;
}

/**
 * Normalizes a domain by removing any existing protocol and "www." prefix.
 * @param domain - The domain string to normalize.
 * @returns The normalized domain.
 */
const normalizeDomain = (domain: string): string => {
  return domain.replace(/^(https?:\/\/)?(www\.)?/, "").toLowerCase();
};

/**
 * Validates if a domain is correctly formatted.
 * Includes support for "localhost" with optional ports.
 * @param domain - The domain string to validate.
 * @returns True if the domain is valid, false otherwise.
 */
const isValidDomain = (domain: string): boolean => {
  const domainRegex = /^localhost(:\d+)?$|^[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})$/;
  return domainRegex.test(domain);
};

/**
 * Generates an array of allowed origin URLs based on the provided domains and prefixes.
 * Automatically excludes `www.` for localhost domains.
 * @param domains - An array of domain strings.
 * @param prefixes - An array of URL prefixes.
 * @param options - Options to customize the generation.
 * @returns An array of unique, fully qualified URLs.
 */
export const generateAllowedOrigins = (
  domains: string[],
  prefixes: ProtocolPrefix[] = Object.values(ProtocolPrefixEnum),
  options: GenerateAllowedOriginsOptions = {
    includeWww: true,
    validateDomains: true,
  },
): string[] => {
  const uniqueCombinations: Set<string> = new Set();

  domains.forEach((domain) => {
    const normalizedDomain = normalizeDomain(domain);

    if (options.validateDomains && !isValidDomain(normalizedDomain)) {
      console.warn(`Skipping invalid domain: ${domain}`);
      return;
    }

    prefixes.forEach((prefix) => {
      if (
        !Object.values(ProtocolPrefixEnum).includes(
          prefix as ProtocolPrefixEnum,
        )
      ) {
        throw new Error(`Invalid prefix: ${prefix}`);
      }

      uniqueCombinations.add(`${prefix}${normalizedDomain}`);

      // Include `www.` based on domain type
      if (options.includeWww && !normalizedDomain.includes("localhost")) {
        uniqueCombinations.add(`${prefix}www.${normalizedDomain}`);
      }
    });

    uniqueCombinations.add(normalizedDomain);

    // Add bare `www.` only for non-localhost domains
    if (options.includeWww && !normalizedDomain.includes("localhost")) {
      uniqueCombinations.add(`www.${normalizedDomain}`);
    }
  });

  return Array.from(uniqueCombinations);
};
