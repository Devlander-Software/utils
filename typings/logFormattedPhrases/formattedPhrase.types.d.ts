import { Formatter } from "picocolors/types";
export type ActualBackgroundColorValues = "bgBlack" | "bgRed" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite";
export type PhraseColors = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray";
export type PhraseDecoration = undefined | "underline" | "strikethrough";
export type PhraseWeight = undefined | "bold";
export type PhraseFontStyle = undefined | "italic";
export declare enum PhraseProperty {
    background = "background",
    color = "color",
    fontWeight = "fontWeight",
    fontStyle = "fontStyle",
    textDecoration = "textDecoration",
    dim = "dim",
    hidden = "hidden"
}
export type PhrasePropertyType = "background" | "color" | "fontWeight" | "fontStyle" | "textDecoration" | "dim" | "hidden" | PhraseProperty;
export interface PhraseOrderType {
    property: PhrasePropertyType;
    order: number;
    enabled?: boolean;
}
export interface AppliedFormatter {
    name: PhraseOrderType["property"];
    formatter: Formatter;
    value: string;
}
/**
 * Represents a phrase item with various formatting options.
 */
export interface PhraseItem {
    /**
     * The phrase text.
     */
    phrase: string;
    /**
     * The color of the phrase.
     */
    color?: PhraseColors;
    /**
     * The environments in which the phrase is allowed.
     */
    allowedInEnvironments?: string[];
    /**
     * The current environment.
     */
    currentEnvironment?: string;
    /**
     * Whether the phrase should be displayed with reduced intensity.
     */
    dim?: boolean;
    /**
     * Whether the phrase should be hidden.
     */
    hidden?: boolean;
    /**
     * The font weight of the phrase.
     */
    fontWeight?: PhraseWeight;
    /**
     * The font style of the phrase.
     */
    fontStyle?: PhraseFontStyle;
    /**
     * The text decoration of the phrase.
     */
    textDecoration?: PhraseDecoration;
    /**
     * The background color of the phrase.
     */
    background?: PhraseColors;
    /**
     * The order in which the styles should be applied.
     */
    orderToApplyStyles?: PhraseOrderType[];
}
export interface PhraseItem {
    phrase: string;
    color?: PhraseColors;
    allowedInEnvironments?: string[];
    currentEnvironment?: string;
    dim?: boolean;
    hidden?: boolean;
    fontWeight?: PhraseWeight;
    fontStyle?: PhraseFontStyle;
    textDecoration?: PhraseDecoration;
    background?: PhraseColors;
    orderToApplyStyles?: PhraseOrderType[];
}
