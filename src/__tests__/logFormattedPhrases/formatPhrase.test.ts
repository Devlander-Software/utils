
import { formatPhrase } from '../../logFormattedPhrases/formatPhrase';
import { PhraseItem } from '../../logFormattedPhrases/formattedPhrase.types';


describe("formatPhrase", () => {
  it("should be able to log with just text", () => {
    const item: PhraseItem = {
      phrase: "Hello, world!",
    };

    const expectedFormattedPhrase = "Hello, world!"; // Update this with the expected formatted phrase

    
 
    // Call the formatPhrase function
   const result = formatPhrase(item);
    if(result) {
    expect(result.message).toBe(expectedFormattedPhrase);
    }
  });

  it("it should work with color and background", () => {
    const item: PhraseItem = {
      phrase: "Hello, world!",
      color: "blue",
      background: "red"
    };


    
 
    // Call the formatPhrase function
   const result = formatPhrase(item);

   console.log(result, 'result in formatPhrase test');
    
    if(result) {
      expect(result.formattersApplied.includes("color")).toBe(true);
      expect(result.formattersApplied.includes("background")).toBe(true);

    }
  });
});