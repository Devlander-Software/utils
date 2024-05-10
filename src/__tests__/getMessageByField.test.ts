import { ErrorMessages, getMessageByField } from "../getMessageByField";

describe("getMessageByField", () => {
  it("should return the error message associated with the given field", () => {
    const errors: ErrorMessages = {
      name: "Name is required",
      age: "Age must be a number",
      city: "City is required",
    };

    const result = getMessageByField("age", errors);

    expect(result).toBe("Age must be a number");
  });

  it("should return undefined if the field is not found in the errors object", () => {
    const errors: ErrorMessages = {
      name: "Name is required",
      age: "Age must be a number",
      city: "City is required",
    };

    const result = getMessageByField("gender", errors);

    expect(result).toBeUndefined();
  });

    it('should return the first error message found for any of the given fields', () => {
      const errors: ErrorMessages = {
        name: 'Name is required',
        age: 'Age must be a number',
        city: 'City is required'
      };
  
      const result = getMessageByField(['name', 'age'], errors);
  
      expect(result).toBe('Name is required');
    });

  it("should return undefined if none of the given fields are found in the errors object", () => {
    const errors: ErrorMessages = {
      name: "Name is required",
      age: "Age must be a number",
      city: "City is required",
    };

    const result = getMessageByField(["gender", "email"], errors);

    expect(result).toBeUndefined();
  });
});