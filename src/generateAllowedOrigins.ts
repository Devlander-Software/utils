export enum ProtocolPrefixEnum {
  HTTPS = 'https://',
  HTTP = 'http://',
  NONE = '',
}

export type ProtocolPrefix = `${ProtocolPrefixEnum}` | ProtocolPrefixEnum

interface GenerateAllowedOriginsOptions {
  includeWww?: boolean
  validateDomains?: boolean
}

/**
 * Normalizes a domain by removing any existing protocol and "www." prefix.
 *
 * @param domain - The domain string to normalize.
 * @returns The normalized domain.
 */
const normalizeDomain = (domain: string): string => {
  return domain.replace(/^(https?:\/\/)?(www\.)?/, '').toLowerCase()
}

/**
 * Validates if a domain is correctly formatted.
 *
 * @param domain - The domain string to validate.
 * @returns True if the domain is valid, false otherwise.
 */
const isValidDomain = (domain: string): boolean => {
  const domainRegex = /^[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})$/
  return domainRegex.test(domain)
}

/**
 * Generates an array of allowed origin URLs based on the provided domains and prefixes.
 *
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
  const uniqueCombinations: Set<string> = new Set()

  domains.forEach((domain) => {
    const normalizedDomain = normalizeDomain(domain)

    // Validate the domain if the option is enabled
    if (options.validateDomains && !isValidDomain(normalizedDomain)) {
      console.warn(`Skipping invalid domain: ${domain}`)
      return
    }

    // Generate URLs with provided prefixes
    prefixes.forEach((prefix) => {
      if (
        !Object.values(ProtocolPrefixEnum).includes(
          prefix as ProtocolPrefixEnum,
        )
      ) {
        throw new Error(`Invalid prefix: ${prefix}`)
      }

      uniqueCombinations.add(`${prefix}${normalizedDomain}`)
      if (options.includeWww) {
        uniqueCombinations.add(`${prefix}www.${normalizedDomain}`)
      }
    })

    // Add bare domain and its www-prefixed variant if not already included
    uniqueCombinations.add(normalizedDomain)
    if (options.includeWww) {
      uniqueCombinations.add(`www.${normalizedDomain}`)
    }
  })

  return Array.from(uniqueCombinations)
}
