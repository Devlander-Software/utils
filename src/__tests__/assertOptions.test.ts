import { assertOptions } from "../assertOptions";
import { DevlanderError } from "../devlanderError";

describe("assertOptions", () => {
  it("should throw an error if options is not an object", () => {
    const options = "not an object";
    const schema = {};
    const allowUnknown = true;
    expect(() => assertOptions(options as any, schema, allowUnknown)).toThrow(
      DevlanderError,
    );
  });

  it("should throw an error if an option does not match the schema", () => {
    const options = {
      option1: "value1",
      option2: "value2",
    };
    const schema = {
      option1: (value: unknown) => typeof value === "number",
      option2: (value: unknown) => typeof value === "boolean",
    };
    const allowUnknown = true;
    expect(() => assertOptions(options, schema, allowUnknown)).toThrow(
      DevlanderError,
    );
  });

  it("should throw an error if an unknown option is not allowed", () => {
    const options = {
      option1: "value1",
      option2: "value2",
    };
    const schema = {};
    const allowUnknown = false;
    expect(() => assertOptions(options, schema, allowUnknown)).toThrow(
      DevlanderError,
    );
  });

  it("should not throw an error if options match the schema", () => {
    const options = {
      option1: 123,
      option2: true,
    };
    const schema = {
      option1: (value: unknown) => typeof value === "number",
      option2: (value: unknown) => typeof value === "boolean",
    };
    const allowUnknown = true;
    expect(() => assertOptions(options, schema, allowUnknown)).not.toThrow();
  });
});
