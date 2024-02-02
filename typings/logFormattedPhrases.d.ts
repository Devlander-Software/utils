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
export declare const logFormattedPhrases: (value: string | number | Record<string, any>, phrases: PhraseItem[]) => void;
