export type PhraseBackgroundColors = "bgBlack" | "bgRed" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite";
export type PhraseTextColors = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray";
export interface PhraseItem {
    phrase: string;
    color?: PhraseTextColors;
    background?: PhraseBackgroundColors;
}
/**
 * Logs formatted phrases with a specified value and an array of phrase items.
 *
 * @param value - The value to be logged. It can be a string, number, or object.
 * @param phrases - An array of phrase items containing the phrase, color, and background styles.
 */
/**
 * Logs the formatted value along with specified phrases.
 * If the value is a number, it is abbreviated before logging.
 * If the value is a string, it is logged as is.
 * If the value is an object, it is logged as JSON string.
 * If the value is a valid JSON object, it is logged with indentation.
 * @param value - The value to be logged.
 * @param phrases - An array of phrases to be logged along with the value.
 */
export declare const logFormattedPhrases: (value: string | number | Record<string, any>, phrases: PhraseItem[]) => void;
