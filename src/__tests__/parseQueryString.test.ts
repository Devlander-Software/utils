import { parseQueryString } from "../query-string-utilities/parseQueryString";

describe("parseQueryString", () => {
  it("should parse a simple query string with single key-value pairs", () => {
    const queryString = "?foo=bar&baz=qux";
    const result = parseQueryString(queryString);
    expect(result).toEqual({ foo: "bar", baz: "qux" });
  });

  it("should handle multiple values for the same key", () => {
    const queryString = "?foo=bar&foo=baz&baz=qux";
    const result = parseQueryString(queryString);
    expect(result).toEqual({ foo: ["bar", "baz"], baz: "qux" });
  });

  it("should handle an empty query string", () => {
    const queryString = "";
    const result = parseQueryString(queryString);
    expect(result).toEqual({});
  });

  it('should ignore the leading "?" in the query string', () => {
    const queryString = "?foo=bar";
    const result = parseQueryString(queryString);
    expect(result).toEqual({ foo: "bar" });
  });

  it("should decode URI components in keys and values", () => {
    const queryString = "?foo%20bar=baz%20qux";
    const result = parseQueryString(queryString);
    expect(result).toEqual({ "foo bar": "baz qux" });
  });

  it("should handle empty keys gracefully", () => {
    const queryString = "?=bar&baz=qux";
    const result = parseQueryString(queryString);
    expect(result).toEqual({ baz: "qux" });
  });

  it("should handle empty values gracefully", () => {
    const queryString = "?foo=&baz=qux";
    const result = parseQueryString(queryString);
    expect(result).toEqual({ foo: "", baz: "qux" });
  });

  it("should handle a mix of keys with single and multiple values", () => {
    const queryString = "?foo=bar&foo=baz&key=value";
    const result = parseQueryString(queryString);
    expect(result).toEqual({ foo: ["bar", "baz"], key: "value" });
  });
});
