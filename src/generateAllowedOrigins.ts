/**
 * Generates an array of allowed origin URLs based on the provided domains and prefixes.
 *
 * @param domains - An array of domain strings (e.g., ["example.com", "www.test.com"]).
 * @param prefixes - An array of URL prefixes to include (e.g., ["https://", "http://"]).
 * @returns An array of fully qualified URLs including combinations with "www." when appropriate.
 *
 * @example
 * const domains = ["example.com", "www.test.com"];
 * const prefixes = ["https://", "http://"];
 * const allowedOrigins = generateAllowedOrigins(domains, prefixes);
 * console.log(allowedOrigins);
 * // Output:
 * // [
 * //   "https://example.com",
 * //   "https://www.example.com",
 * //   "http://example.com",
 * //   "http://www.example.com",
 * //   "example.com",
 * //   "https://www.test.com",
 * //   "http://www.test.com",
 * //   "www.test.com"
 * // ]
 */
export const generateAllowedOrigins = (
  domains: string[],
  prefixes: ['https://', 'http://'],
): string[] => {
  const combinations: string[] = []

  domains.forEach((domain) => {
    const baseDomain = domain.replace(/^(https?:\/\/)?(www\.)?/, '')

    prefixes.forEach((prefix) => {
      combinations.push(`${prefix}${baseDomain}`)
      combinations.push(`${prefix}www.${baseDomain}`)
    })

    combinations.push(baseDomain)
    if (!domain.startsWith('www.')) {
      combinations.push(`www.${baseDomain}`)
    }
  })

  return combinations
}
