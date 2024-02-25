/**
 * Returns the first word of a string capitalized.
 *
 * @param str - The input string.
 * @returns The first word of the input string, with the first letter capitalized and the rest in lowercase.
 * @throws If an error occurs during the process.
 */
export const getFirstWordCapitalized = (str: string) => {
  try {
    // Trim leading and trailing white spaces, and then split the string by spaces
    const words = str.trim().split(" ");

    // Check if the array has a valid first word
    if (words.length === 0 || words[0] === "") {
      return "";
    } else if (words && words.length > 1 && words[0]) {
      const firstWord = words[0];

      // Capitalize the first letter and convert the rest to lowercase
      const capitalizedFirstWord =
        firstWord.charAt(0).toUpperCase() + firstWord.slice(1).toLowerCase();
      return capitalizedFirstWord;
    } else {
      return "";
    }
  } catch (error) {
    throw new Error(String(error));
  }
};
