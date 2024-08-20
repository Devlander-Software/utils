import { PhraseItem } from "./formattedPhrase.types";
/**
 * Logs the formatted value along with specified phrases.
 * If the value is a number, it is abbreviated before logging.
 * If the value is a string, it is logged as is.
 * If the value is an object, it is logged as JSON string.
 * If the value is a valid JSON object, it is logged with indentation.
 * @param value - The value to be logged.
 * @param phrases - An array of phrases to be logged along with the value.
 */
export declare const logPhrases: (value: string | number | Record<string, any>, phrases?: PhraseItem[]) => void;
