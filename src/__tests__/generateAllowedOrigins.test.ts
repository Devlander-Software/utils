import { generateAllowedOrigins } from "../generateAllowedOrigins";

describe("generateAllowedOrigins", () => {
  it("should generate multiple urls using https, www, and .com and the subdomain ", () => {
    const domains = ["subdomain.example.com"];
    const result = generateAllowedOrigins(domains);
    const expected = [
      "https://subdomain.example.com",
      "https://www.subdomain.example.com",
      "http://subdomain.example.com",
      "http://www.subdomain.example.com",
      "subdomain.example.com",
    ];
    expect(result).toEqual(expected);
  });

  it("should generate multiple urls with http and www", () => {
    const domains = ["hello-my-darling.com"];
    const result = generateAllowedOrigins(domains);
    const expected = [
      "https://hello-my-darling.com",
      "https://www.hello-my-darling.com",
      "http://hello-my-darling.com",
      "http://www.hello-my-darling.com",
      "hello-my-darling.com",
    ];
    expect(result).toEqual(expected);
  });
});
