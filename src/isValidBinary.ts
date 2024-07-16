export const isValidBinary = (binary: string): boolean => {
    return /^[01]+$/.test(binary);
  };
  