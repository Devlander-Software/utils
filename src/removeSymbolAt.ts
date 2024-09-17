export const removeSymbolAt = (
  str: string,
  symbol: string,
  position: number = 0,
): string => {
  return str.charAt(position) === symbol
    ? str.slice(0, position) + str.slice(position + 1)
    : str;
};
