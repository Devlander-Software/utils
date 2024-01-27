import { findItemByLetterAndFilter } from "../findItemByLetterAndFilter";

describe("findItemByLetterAndFilter", () => {
  it("should return true if an item with the specified letter is found", () => {
    const array = [{ name: "Apple" }, { name: "Banana" }, { name: "Cherry" }];
    const letter = "a";
    const result = findItemByLetterAndFilter(letter, array);
    expect(result).toBe(true);
  });

  it("should return false if no item with the specified letter is found", () => {
    const array = [{ name: "Apple" }, { name: "Banana" }, { name: "Cherry" }];
    const letter = "z";
    const result = findItemByLetterAndFilter(letter, array);
    expect(result).toBe(false);
  });

  it("should return true if an item with the specified letter and filter text is found", () => {
    const array = [{ name: "Apple" }, { name: "Banana" }, { name: "Cherry" }];
    const letter = "a";
    const filterText = "ppl";
    const result = findItemByLetterAndFilter(
      letter,
      array,
      "name",
      0,
      filterText
    );
    expect(result).toBe(true);
  });

  it("should return false if no item with the specified letter and filter text is found", () => {
    const array = [{ name: "Apple" }, { name: "Banana" }, { name: "Cherry" }];
    const letter = "a";
    const filterText = "xyz";
    const result = findItemByLetterAndFilter(
      letter,
      array,
      "name",
      0,
      filterText
    );
    expect(result).toBe(false);
  });
});
