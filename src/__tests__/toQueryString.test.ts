import { toQueryString } from "../toQueryString";
describe("toQueryString", () => {
  test("should return an empty string if no query object is provided", () => {
    expect(toQueryString()).toBe("");
  });

  test("should return an empty string if an empty object is provided", () => {
    expect(toQueryString({})).toBe("");
  });

  test("should return a query string with only defined keys", () => {
    expect(toQueryString({ name: "John", age: 30, active: true })).toBe(
      "?name=John&age=30&active=true",
    );
  });

  test("should exclude null and undefined values from the query string", () => {
    expect(toQueryString({ name: "Alice", age: null, active: undefined })).toBe(
      "?name=Alice",
    );
  });

  test("should correctly encode special characters", () => {
    expect(
      toQueryString({ name: "John Doe", city: "New York", status: "a+b&c" }),
    ).toBe("?name=John%20Doe&city=New%20York&status=a%2Bb%26c");
  });

  test("should return a single key-value pair correctly formatted", () => {
    expect(toQueryString({ key: "value" })).toBe("?key=value");
  });

  test("should return an empty string if all values are null or undefined", () => {
    expect(toQueryString({ a: null, b: undefined })).toBe("");
  });

  test("should handle boolean values correctly", () => {
    expect(toQueryString({ isEnabled: true, isVisible: false })).toBe(
      "?isEnabled=true&isVisible=false",
    );
  });

  test("should handle a mix of string, number, and boolean types", () => {
    expect(toQueryString({ name: "Test", count: 5, isActive: false })).toBe(
      "?name=Test&count=5&isActive=false",
    );
  });
});
