export const ensureValidStyle = (cssString: string): string => {
  // Fix for missing colons and ensuring semicolons are correctly placed
  const fixedCSS = cssString
    // Fix missing colons. Matches property names followed by spaces and values, ensuring a colon is inserted.
    .replace(
      /([a-z-]+)\s+([^;:]+)(;|$)/gi,
      (match, property, value, ending) =>
        `${property}: ${value}${ending === ";" ? ";" : ""}`,
    )
    // Ensure semicolons at the end of each declaration
    .replace(/([^;])\s*$/gm, "$1;");

  return fixedCSS;
};
