import { TColor, TColorValue } from "./types/log-color.types";
/**
 * Logs a message to the console with the specified color.
 *
 * @param {TColor | TColorValue} color - The color to use for the log message.
 * @param {string} message - The message to log.
 * @param {Record<string, unknown>} [data] - Optional additional data to log alongside the message.
 */
export declare const log: (color: TColor | TColorValue, message: string, data?: Record<string, unknown>) => void;
/**
 * Logs a message with a specified color.
 *
 * @param {string} message - The message to log.
 * @param {TColorValue} [color='bgBlue'] - The color value to use for the message.
 */
export declare const logMessage: (message: string, color?: TColorValue) => void;
/**
 * Logs a message based on a condition (green for true, red for false).
 *
 * @param {string} message - The message to log.
 * @param {boolean} condition - The condition to determine the color of the message.
 */
export declare const logCondition: (message: string, condition: boolean) => void;
/**
 * Logs error messages with red color.
 *
 * @param {string} functionName - The name of the function where the error occurred.
 * @param {string | Record<string, unknown>} error - The error message or object to log.
 */
export declare const logError: (functionName: string, error: string | Record<string, unknown> | object) => void;
/**
 * Logs messages for a function, including variables (JSON or normal variables).
 *
 * @param {string} functionName - The name of the function being logged.
 * @param {Record<string, unknown> | string | number | boolean} variables - Variables to log.
 * @param {string} [message] - An optional message to log alongside the variables.
 * @param {TColorValue} [color='bgBlue'] - The color to use for the log message.
 */
export declare const logFunction: (functionName: string, variables: Record<string, unknown> | string | number | boolean, message?: string, color?: TColorValue) => void;
/**
 * Logs a separator for better readability in the console.
 */
export declare const logSeparator: () => void;
/**
 * Logs the start of a process or function with an optional file name.
 *
 * @param {string} functionName - The name of the function or process being started.
 * @param {string} [fileName] - An optional file name to provide context.
 */
export declare const logStart: (functionName: string, fileName?: string) => void;
/**
 * Logs the end of a process or function with an optional file name.
 *
 * @param {string} functionName - The name of the function or process being ended.
 * @param {string} [fileName] - An optional file name to provide context.
 */
export declare const logEnd: (functionName: string, fileName?: string) => void;
