
// this needs an example in ts docs of how the function is used and why it's useful

export const endsWith = (
  str: string,
  searchString: string,
  position?: number,
): boolean => {
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
