// if devMode is true

export const generateAllowedOrigins = (domains: string[]): string[] => {
  const combinations: string[] = [];

  domains.forEach((domain) => {
    const baseDomain = domain.replace(/^(https?:\/\/)?/, "");
    const prefixes = ["https://", "http://"];

    prefixes.forEach((prefix) => {
      combinations.push(`${prefix}${baseDomain}`);
      if (domain.startsWith("www.")) {
        combinations.push(`${prefix}${baseDomain}`);
      } else {
        combinations.push(`${prefix}www.${baseDomain}`);
      }
    });

    combinations.push(baseDomain);
  });

  return combinations;
};
