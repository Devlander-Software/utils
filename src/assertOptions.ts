import { DevlanderError } from "./devlanderError";
import { isObject } from "./isJson";

export function assertOptions(
  options: { [key: string]: unknown } | null,
  schema: {
    [key: string]: (
      value: unknown,
      opt: string,
      options: { [key: string]: unknown },
    ) => boolean | string;
  } | null,
  allowUnknown: boolean,
): void {
  if (!isObject(schema)) {
    return;
  }

  if (schema === null) {
    throw new DevlanderError(
      "Schema must be an object",
      "ERR_BAD_OPTION_VALUE",
    );
  }

  if (options === null) {
    throw new DevlanderError(
      "Options must be an object",
      "ERR_BAD_OPTION_VALUE",
    );
  }

  if (!isObject(options)) {
    throw new DevlanderError(
      "Options must be an object",
      "ERR_BAD_OPTION_VALUE",
    );
  }

  const keys = Object.keys(options);
  for (const opt of keys) {
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result =
        value === undefined ||
        validator(value, opt, options as unknown as { [key: string]: unknown });
      if (result !== true) {
        throw new DevlanderError(
          `Option '${opt}' must be ${result}`,
          "ERR_BAD_OPTION_VALUE",
        );
      }
    } else if (!allowUnknown) {
      throw new DevlanderError(`Unknown option '${opt}'`, "ERR_BAD_OPTION");
    }
  }
}
