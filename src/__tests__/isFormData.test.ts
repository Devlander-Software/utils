import { isFormData } from "../isFormData";

describe("isFormData", () => {
  it("should return true if the value is a form data", () => {
    const value = new FormData();
    const result = isFormData(value as any); // Cast 'value' to 'any' to bypass the type check.
    expect(result).toBe(true);
  });

  it("should return false if the value is not a form data", () => {
    const value = "Hello";
    const result = isFormData(value as any); // Cast 'value' to 'any' to bypass the type check.
    expect(result).toBe(false);
  });
});
