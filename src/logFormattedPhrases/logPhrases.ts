/* eslint-disable @typescript-eslint/no-explicit-any */
import { abbreviateNumber } from "../abbreviateNumber";
import { isJson } from "../isJson";
import { formatPhrase } from "./formatPhrase";
import { PhraseItem } from "./formattedPhrase.types";

const defaultPhrases: PhraseItem[] = [
  {
    phrase: "Success",
    background: "green",
    color: "white",
    fontWeight: "bold",
  },
  {
    phrase: "Error",
    background: "red",
    color: "white",
    fontWeight: "bold",
  },
  {
    phrase: "Warning",
    background: "yellow",
    color: "black",
    fontWeight: "bold",
  },
  {
    phrase: "Info",
    background: "blue",
    color: "white",
    fontWeight: "bold",
  },
  {
    phrase: "devlander",
    background: "cyan",
    color: "black",
    fontWeight: "bold",
  },
  {
    phrase: "Debug",
    background: "magenta",
    color: "white",
    fontWeight: "bold",
  },
];

/**
 * Logs the formatted value along with specified phrases.
 * If the value is a number, it is abbreviated before logging.
 * If the value is a string, it is logged as is.
 * If the value is an object, it is logged as JSON string.
 * If the value is a valid JSON object, it is logged with indentation.
 * @param value - The value to be logged.
 * @param phrases - An array of phrases to be logged along with the value.
 */
export const logPhrases = (
  value: string | number | Record<string, any>,
  phrases?: PhraseItem[],
): void => {
  if (
    (phrases && phrases.length === 0) ||
    !phrases ||
    !Array.isArray(phrases) ||
    typeof phrases === "undefined"
  ) {
    phrases = defaultPhrases;
  }
  let valueString: string;

  if (typeof value === "number") {
    valueString = abbreviateNumber(value) as string;
  } else if (typeof value === "string") {
    valueString = JSON.stringify(value);
  } else {
    const isValidJson = isJson(value);
    valueString = !isValidJson
      ? JSON.stringify(value)
      : JSON.stringify(value, null, 2);
  }

  if (typeof phrases !== "undefined" && phrases && phrases.length === 0) {
    // Default log if no phrases provided
    formatPhrase({
      phrase: valueString,
    });
  } else if (phrases) {
    // Log each phrase with specified styles
    phrases.forEach((phraseItem) => {
      const { phrase, color, background } = phraseItem;
      const combinedPhrase = `${phrase}: ${valueString}`;
      const newPhrase = {
        ...phraseItem,
        phrase: combinedPhrase,
        color,
        background,
      };
      formatPhrase(newPhrase);
    });
  }
};
