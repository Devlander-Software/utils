import {
  log,
  logCondition,
  logEnd,
  logError,
  logFunction,
  logMessage,
  logSeparator,
  logStart,
} from "../development-tools/loggerUtils";

// Mock the console.log method
beforeEach(() => {
  jest.spyOn(global.console, "log").mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Logger Utils", () => {
  test("log() logs message with specified color", () => {
    log("green", "Test message");
    expect(console.log).toHaveBeenCalledWith(
      "\x1b[32m%s\x1b[0m",
      "Test message",
    );
  });

  test("logMessage() logs a message with the default color (bgBlue)", () => {
    logMessage("Test message");
    expect(console.log).toHaveBeenCalledWith(
      "\x1b[44m%s\x1b[0m",
      "Test message",
    );
  });

  test("logMessage() logs a message with a specified color", () => {
    logMessage("Test message", "red");
    expect(console.log).toHaveBeenCalledWith(
      "\x1b[31m%s\x1b[0m",
      "Test message",
    );
  });

  test("logCondition() logs green when condition is true", () => {
    logCondition("Condition is true", true);
    expect(console.log).toHaveBeenCalledWith(
      "\x1b[32m%s\x1b[0m",
      "Condition is true",
    );
  });

  test("logCondition() logs red when condition is false", () => {
    logCondition("Condition is false", false);
    expect(console.log).toHaveBeenCalledWith(
      "\x1b[31m%s\x1b[0m",
      "Condition is false",
    );
  });

  test("logError() logs an error message in red", () => {
    logError("testFunction", "This is an error");
    expect(console.log).toHaveBeenCalledWith(
      "\x1b[31m%s\x1b[0m",
      "Error in testFunction: This is an error",
    );
  });

  test("logError() logs an error object in red", () => {
    const error = new Error("Test error");
    logError("testFunction", error);
    expect(console.log).toHaveBeenCalledWith(
      "\x1b[31m%s\x1b[0m",
      `Error in testFunction: ${JSON.stringify(error, null, 2)}`,
    );
  });

  test("logFunction() logs function name, message, and variables with bgBlue by default", () => {
    logFunction("testFunction", { key: "value" }, "Test message");
    expect(console.log).toHaveBeenCalledWith(
      "\x1b[44m%s\x1b[0m",
      'Function: testFunction - Test message | Variables: {\n  "key": "value"\n}',
    );
  });

  test("logFunction() logs function name and variables in specified color", () => {
    logFunction("testFunction", { key: "value" }, "Test message", "bgGreen");
    expect(console.log).toHaveBeenCalledWith(
      "\x1b[42m%s\x1b[0m",
      'Function: testFunction - Test message | Variables: {\n  "key": "value"\n}',
    );
  });

  test("logFunction() works with non-object variables", () => {
    logFunction("testFunction", "Some value", "Test message", "bgGreen");
    expect(console.log).toHaveBeenCalledWith(
      "\x1b[42m%s\x1b[0m",
      "Function: testFunction - Test message | Variables: Some value",
    );
  });

  test("logSeparator() logs the separator line", () => {
    logSeparator();
    expect(console.log).toHaveBeenCalledWith(
      "\n==============================================\n",
    );
  });

  test("logStart() logs the start of a process", () => {
    logStart("testFunction");
    expect(console.log).toHaveBeenCalledWith(
      "\x1b[34m%s\x1b[0m",
      "==== START: testFunction ====",
    );
  });

  test("logStart() logs the start of a process with file name", () => {
    logStart("testFunction", "fileName.ts");
    expect(console.log).toHaveBeenCalledWith(
      "\x1b[34m%s\x1b[0m",
      "==== START: testFunction (fileName.ts) ====",
    );
  });

  test("logEnd() logs the end of a process", () => {
    logEnd("testFunction");
    expect(console.log).toHaveBeenCalledWith(
      "\x1b[34m%s\x1b[0m",
      "==== END: testFunction ====",
    );
  });

  test("logEnd() logs the end of a process with file name", () => {
    logEnd("testFunction", "fileName.ts");
    expect(console.log).toHaveBeenCalledWith(
      "\x1b[34m%s\x1b[0m",
      "==== END: testFunction (fileName.ts) ====",
    );
  });
});
