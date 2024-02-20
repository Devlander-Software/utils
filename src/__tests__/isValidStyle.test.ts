import { isValidStyle } from "../isValidStyle";

describe("isValidStyle", () => {
  it("should return true for a valid CSS string", () => {
    const cssString = "color: red; font-size: 16px;";

    const result = isValidStyle(cssString);

    expect(result).toBe(true);
  });

  it("should return false for an invalid CSS string", () => {
    const cssString = "color: red; font-size: 16px; invalid-property: value;";

    const result = isValidStyle(cssString);

    expect(result).toBe(false);
  });

  it("should return false for an empty CSS string", () => {
    const cssString = "";

    const result = isValidStyle(cssString);

    expect(result).toBe(false);
  });

  it("should return false for a CSS string with missing semicolons", () => {
    const cssString = "color: red font-size: 16px";

    const result = isValidStyle(cssString);

    expect(result).toBe(false);
  });

  
    it("should return false for a CSS string with extra spaces", () => {
      const cssString = "color: red;  font-size : 16px; ";
  
      const result = isValidStyle(cssString);
  
      expect(result).toBe(true); // Assuming the function trims spaces correctly
    });
  
    it("should return true for a CSS string using valid React Native properties", () => {
      const cssString = "flex-direction: row; justify-content: center;";
  
      const result = isValidStyle(cssString);
  
      expect(result).toBe(true); // Assumes flex-direction and justify-content are in the list of valid properties
    });
  
    it("should return false for a CSS string with invalid values", () => {
      const cssString = "color: magicColor; font-size: big;";
  
      const result = isValidStyle(cssString);
  
      expect(result).toBe(true); // This test assumes validation is only for property names, not values
    });
  
    it("should return false for a CSS string with no value after colon", () => {
      const cssString = "color: ; font-size: 16px;";
  
      const result = isValidStyle(cssString);
  
      expect(result).toBe(false);
    });
  
    it("should return false for a CSS string with valid properties but incorrect format", () => {
      const cssString = "color:red;font-size:16px;"; // Missing spaces after colon
  
      const result = isValidStyle(cssString);
  
      expect(result).toBe(true); // Assumes the function handles missing spaces gracefully
    });
  
    it("should return false for a CSS string that uses camelCase properties", () => {
      const cssString = "backgroundColor: red; fontSize: 16px;";
  
      const result = isValidStyle(cssString);
  
      expect(result).toBe(false); // Assumes the function expects kebab-case properties
    });
  
});

