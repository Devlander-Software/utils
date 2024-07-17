export const binaryToHex = (binary: string): string => {
  if (!/^[01]+$/.test(binary)) {
    throw new Error("Invalid binary input");
  }

  const paddedBinary =
    binary.length % 4 === 0
      ? binary
      : "0".repeat(4 - (binary.length % 4)) + binary;
  const hex = paddedBinary
    .match(/.{1,4}/g)!
    .map((group) => parseInt(group, 2).toString(16))
    .join("");

  return hex;
};
