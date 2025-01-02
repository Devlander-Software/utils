import { generateAllowedOrigins } from "../generateAllowedOrigins";
import { ProtocolPrefixEnum } from "../generateAllowedOrigins";

describe("generateAllowedOrigins", () => {
  it("should generate URLs for a subdomain with all prefix combinations", () => {
    const domains = ["subdomain.example.com"];
    const prefixes = [
      ProtocolPrefixEnum.HTTPS,
      ProtocolPrefixEnum.HTTP,
      ProtocolPrefixEnum.NONE,
    ];
    const result = generateAllowedOrigins(domains, prefixes);
    const expected = [
      "https://subdomain.example.com",
      "https://www.subdomain.example.com",
      "http://subdomain.example.com",
      "http://www.subdomain.example.com",
      "subdomain.example.com",
      "www.subdomain.example.com",
    ];
    expect(result).toEqual(expected);
  });

  it("should generate URLs for a domain without duplicates", () => {
    const domains = ["hello-my-darling.com"];
    const prefixes = [ProtocolPrefixEnum.HTTP, ProtocolPrefixEnum.NONE];
    const result = generateAllowedOrigins(domains, prefixes);
    const expected = [
      "http://hello-my-darling.com",
      "http://www.hello-my-darling.com",
      "hello-my-darling.com",
      "www.hello-my-darling.com",
    ];
    expect(result).toEqual(expected);
  });

  it("should handle an empty domain list", () => {
    const domains: string[] = [];
    const prefixes = [ProtocolPrefixEnum.HTTPS, ProtocolPrefixEnum.HTTP];
    const result = generateAllowedOrigins(domains, prefixes);
    expect(result).toEqual([]);
  });

  it("should handle domains with mixed prefixes and formats", () => {
    const domains = ["https://example.com", "www.test.com"];
    const prefixes = [ProtocolPrefixEnum.HTTPS, ProtocolPrefixEnum.NONE];
    const result = generateAllowedOrigins(domains, prefixes);
    const expected = [
      "https://example.com",
      "https://www.example.com",
      "example.com",
      "www.example.com",
      "https://test.com",
      "https://www.test.com",
      "test.com",
      "www.test.com",
    ];
    expect(result).toEqual(expected);
  });

  it("should skip invalid domains", () => {
    const domains = ["example.com", "", "invalid_domain"];
    const prefixes = [ProtocolPrefixEnum.HTTPS];
    const result = generateAllowedOrigins(domains, prefixes);
    const expected = [
      "https://example.com",
      "https://www.example.com",
      "example.com",
      "www.example.com",
    ];
    expect(result).toEqual(expected);
  });

  it("should allow disabling www. combinations", () => {
    const domains = ["example.com"];
    const prefixes = [ProtocolPrefixEnum.HTTPS];
    const options = { includeWww: false };
    const result = generateAllowedOrigins(domains, prefixes, options);
    const expected = ["https://example.com", "example.com"];
    expect(result).toEqual(expected);
  });

  it("should handle domains with subdomains correctly", () => {
    const domains = ["sub.domain.com"];
    const prefixes = [ProtocolPrefixEnum.HTTPS];
    const result = generateAllowedOrigins(domains, prefixes);
    const expected = [
      "https://sub.domain.com",
      "https://www.sub.domain.com",
      "sub.domain.com",
      "www.sub.domain.com",
    ];
    expect(result).toEqual(expected);
  });

  it("should handle large inputs efficiently", () => {
    const domains = Array.from({ length: 1000 }, (_, i) => `example${i}.com`);
    const prefixes = [ProtocolPrefixEnum.HTTPS, ProtocolPrefixEnum.HTTP];
    const result = generateAllowedOrigins(domains, prefixes);
    expect(result.length).toBeGreaterThan(1000 * prefixes.length);
  });

  it("should correctly handle localhost domains", () => {
    const domains = ["localhost", "localhost:3000"];
    const prefixes = [ProtocolPrefixEnum.HTTPS, ProtocolPrefixEnum.HTTP];
    const result = generateAllowedOrigins(domains, prefixes);
    const expected = [
      "https://localhost",
      "http://localhost",
      "localhost",
      "https://localhost:3000",
      "http://localhost:3000",
      "localhost:3000",
    ];
    expect(result).toEqual(expected);
  });
});
