/* eslint-disable tsdoc/syntax */
import { TColor, TColorValue } from "./types/log-color.types";

/**
 * ANSI escape codes for colors and background colors.
 * Maps the color values from TColor to their corresponding ANSI codes.
 */
const colors: { [key in TColor | "reset"]: string } = {
  blue: "\x1b[34m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  magenta: "\x1b[35m",
  bgBlue: "\x1b[44m",
  bgGreen: "\x1b[42m",
  bgRed: "\x1b[41m",
  reset: "\x1b[0m",
};

/**
 * Logs a message to the console with the specified color.
 *
 * @param {TColor | TColorValue} color - The color to use for the log message.
 * @param {string} message - The message to log.
 * @param {Record<string, unknown>} [data] - Optional additional data to log alongside the message.
 */
export const log = (
  color: TColor | TColorValue,
  message: string,
  data?: Record<string, unknown>,
): void => {
  const colorCode = colors[color as TColor] || colors.reset;

  if (data !== undefined) {
    console.log(`${colorCode}%s${colors.reset}`, message, data);
  } else {
    console.log(`${colorCode}%s${colors.reset}`, message);
  }
};

/**
 * Logs a message with a specified color.
 *
 * @param {string} message - The message to log.
 * @param {TColorValue} [color='bgBlue'] - The color value to use for the message.
 */
export const logMessage = (
  message: string,
  color: TColorValue = "bgBlue",
): void => {
  log(color, message);
};

/**
 * Logs a message based on a condition (green for true, red for false).
 *
 * @param {string} message - The message to log.
 * @param {boolean} condition - The condition to determine the color of the message.
 */
export const logCondition = (message: string, condition: boolean): void => {
  const color: TColor | TColorValue = condition ? "green" : "red";
  log(color, message);
};

/**
 * Logs error messages with red color.
 *
 * @param {string} functionName - The name of the function where the error occurred.
 * @param {string | Record<string, unknown>} error - The error message or object to log.
 */
export const logError = (
  functionName: string,
  error: string | Record<string, unknown> | object,
): void => {
  const errorMessage =
    typeof error === "string" ? error : JSON.stringify(error, null, 2);
  logMessage(`Error in ${functionName}: ${errorMessage}`, "red");
};

/**
 * Logs messages for a function, including variables (JSON or normal variables).
 *
 * @param {string} functionName - The name of the function being logged.
 * @param {Record<string, unknown> | string | number | boolean} variables - Variables to log.
 * @param {string} [message] - An optional message to log alongside the variables.
 * @param {TColorValue} [color='bgBlue'] - The color to use for the log message.
 */
export const logFunction = (
  functionName: string,
  variables: Record<string, unknown> | string | number | boolean,
  message?: string,
  color: TColorValue = "bgBlue",
): void => {
  const formattedVariables =
    typeof variables === "object"
      ? JSON.stringify(variables, null, 2)
      : String(variables);
  const formattedMessage = `Function: ${functionName} ${message ? `- ${message}` : ""} | Variables: ${formattedVariables}`;
  log(color, formattedMessage);
};

/**
 * Logs a separator for better readability in the console.
 */
export const logSeparator = (): void => {
  console.log("\n==============================================\n");
};

/**
 * Logs the start of a process or function with an optional file name.
 *
 * @param {string} functionName - The name of the function or process being started.
 * @param {string} [fileName] - An optional file name to provide context.
 */
export const logStart = (functionName: string, fileName?: string): void => {
  logSeparator();
  const location = fileName ? ` (${fileName})` : "";
  log("blue", `==== START: ${functionName}${location} ====`);
  logSeparator();
};

/**
 * Logs the end of a process or function with an optional file name.
 *
 * @param {string} functionName - The name of the function or process being ended.
 * @param {string} [fileName] - An optional file name to provide context.
 */
export const logEnd = (functionName: string, fileName?: string): void => {
  logSeparator();
  const location = fileName ? ` (${fileName})` : "";
  log("blue", `==== END: ${functionName}${location} ====`);
  logSeparator();
};
