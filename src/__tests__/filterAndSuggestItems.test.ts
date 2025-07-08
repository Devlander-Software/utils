import { filterAndSuggestItems } from "../array-operations/filterAndSuggestItems";

interface Product {
  _id: string;
  name: string;
  description: string;
}

const products: Product[] = [
  { _id: "1", name: "Apple", description: "A fresh and juicy apple" },
  { _id: "2", name: "Banana", description: "Yellow banana full of potassium" },
  { _id: "3", name: "Cherry", description: "Sweet cherry and red in color" },
];

describe("filterAndSuggestItems", () => {
  it("should return items matching the search text with default stop words", () => {
    const result = filterAndSuggestItems<Product>(
      "apple juicy",
      products,
      [], // No excluded IDs
      ["name", "description"], // Fields to search within
      "_id",
    );
    expect(result).toEqual([
      { _id: "1", name: "Apple", description: "A fresh and juicy apple" },
    ]);
  });

  it("should return an empty array if search text is empty", () => {
    const result = filterAndSuggestItems<Product>("", products);
    expect(result).toEqual([]);
  });

  it("should exclude items with IDs in the excludedIds parameter", () => {
    const result = filterAndSuggestItems<Product>(
      "banana",
      products,
      ["2"], // Exclude the item with id "2"
      ["name", "description"],
    );
    expect(result).toEqual([]);
  });

  // it('should return items matching search text in multiple fields', () => {
  //     const result = filterAndSuggestItems<Product>(
  //         "sweet cherry",
  //         products,
  //         [],
  //         ["name", "description"] // Search in both name and description
  //     );
  //     expect(result).toEqual([{ id: "3", name: "Cherry", description: "Sweet cherry and red in color" }]);
  // });

  it("should return items matching search text in multiple fields", () => {
    const result = filterAndSuggestItems<Product>(
      "sweet cherry",
      products,
      [],
      ["name", "description"], // Search in both name and description
    );
    expect(result).toEqual([
      {
        _id: "3",
        name: "Cherry",
        description: "Sweet cherry and red in color",
      },
    ]);
  });

  it("should apply custom stop words correctly", () => {
    const customStopWords = ["apple", "juicy"];
    const result = filterAndSuggestItems<Product>(
      "apple juicy",
      products,
      [],
      ["name", "description"],
      "_id",
      customStopWords,
    );
    expect(result).toEqual([]);
  });

  it("should return items that match with partial words after filtering out stop words", () => {
    const result = filterAndSuggestItems<Product>(
      "banana full potassium",
      products,
      [],
      ["name", "description"],
    );
    expect(result).toEqual([
      {
        _id: "2",
        name: "Banana",
        description: "Yellow banana full of potassium",
      },
    ]);
  });

  it("should return an empty array if no items match the search terms", () => {
    const result = filterAndSuggestItems<Product>("nonexistent", products);
    expect(result).toEqual([]);
  });
});

// ● filterAndSuggestItems › should exclude items with IDs in the excludedIds parameter

// expect(received).toEqual(expected) // deep equality

// - Expected  - 1
// + Received  + 7

// - Array []
// + Array [
// +   Object {
// +     "description": "Yellow banana full of potassium",
// +     "id": "2",
// +     "name": "Banana",
// +   },
// + ]

//   41 |       ["name", "description"]
//   42 |     );
// > 43 |     expect(result).toEqual([]);
//      |                    ^
//   44 |   });
//   45 |
//   46 |   it('should return items matching search text in multiple fields', () => {

//   at Object.toEqual (src/__tests__/filterAndSuggestItems.test.ts:43:20)
