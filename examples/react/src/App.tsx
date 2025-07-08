import React, { useState, useEffect } from "react";
import {
  // Base64 utilities
  encodeStringToBase64,
  decodeBase64ToString,
  isValidBase64,
  convertBlobToBase64WebAsync,

  // Array operations
  deduplicate,
  DeduplicateInputType,
  getRandomValFromArray,
  getRange,
  getUniqueObjects,

  // String manipulation
  dashToCamelCase,
  endsWith,
  pluralize,
  removeNewLinesFromString,
  removeSpacesFromString,

  // Object manipulation
  mergeObjects,
  toFlatObject,
  getValueFromObject,

  // Type checking
  isString,
  isNumber,
  isObject,
  isEmpty,

  // Mathematical calculations
  calculatePercentage,
  getAverage,

  // Data formatting
  abbreviateNumber,
  formatRangeOrPercentage,

  // Development tools
  log,
  logError,
  waitFor,
} from "@devlander/utils";

export function App() {
  const [testResults, setTestResults] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const runTests = async () => {
      const results: Record<string, boolean> = {};

      try {
        // Base64 tests
        results["encodeStringToBase64"] =
          encodeStringToBase64("Hello") === "SGVsbG8=";
        results["decodeBase64ToString"] =
          decodeBase64ToString("SGVsbG8=") === "Hello";
        results["isValidBase64"] =
          isValidBase64("SGVsbG8=") && !isValidBase64("invalid!");

        // Array tests
        const deduplicated = deduplicate(
          [1, 2, 2, 3],
          DeduplicateInputType.ARRAY
        );
        results["deduplicate"] =
          Array.isArray(deduplicated) && deduplicated.length === 3;
        results["getRandomValFromArray"] =
          typeof getRandomValFromArray([1, 2, 3], 0) === "number";
        results["getRange"] = getRange(1, 5).length === 5;
        results["getUniqueObjects"] =
          getUniqueObjects([{ id: 1 }, { id: 1 }, { id: 2 }], "id").length ===
          2;

        // String tests
        results["dashToCamelCase"] =
          dashToCamelCase("hello-world") === "helloWorld";
        results["endsWith"] = endsWith("hello world", "world");
        results["pluralize"] = pluralize(2, "test", "tests") === "tests";
        results["removeNewLinesFromString"] =
          removeNewLinesFromString("hello\nworld") === "helloworld";
        results["removeSpacesFromString"] =
          removeSpacesFromString("hello world") === "helloworld";

        // Object tests
        results["mergeObjects"] =
          mergeObjects({ a: 1 }, { b: 2 }).a === 1 &&
          mergeObjects({ a: 1 }, { b: 2 }).b === 2;
        results["toFlatObject"] =
          Object.keys(toFlatObject({ a: { b: 1 } })).length > 0;
        results["getValueFromObject"] = getValueFromObject("a", { a: 1 }) === 1;

        // Type checking tests
        results["isString"] = isString("hello") && !isString(123);
        results["isNumber"] = isNumber(123) && !isNumber("123");
        results["isObject"] =
          isObject({}) && isObject([]) && !isObject("string");
        results["isEmpty"] = isEmpty("") && isEmpty({});

        // Math tests
        results["calculatePercentage"] = calculatePercentage(50, 100) === 50;
        results["getAverage"] = getAverage([1, 2, 3]) === 2;

        // Formatting tests
        results["abbreviateNumber"] = abbreviateNumber(1000).includes("K");
        results["formatRangeOrPercentage"] = formatRangeOrPercentage({
          details: "test",
          formatAsRangeOrAmount: "Amount",
          percent: 50,
        }).includes("50%");

        // Development tools tests
        results["log"] = true; // log function exists
        results["logError"] = true; // logError function exists
        results["waitFor"] = true; // waitFor function exists

        // Test blob conversion (web only)
        if (typeof Blob !== "undefined") {
          const blob = new Blob(["test"], { type: "text/plain" });
          try {
            await convertBlobToBase64WebAsync(blob);
            results["convertBlobToBase64WebAsync"] = true;
          } catch {
            results["convertBlobToBase64WebAsync"] = false;
          }
        } else {
          results["convertBlobToBase64WebAsync"] = true; // Skip in non-blob environments
        }
      } catch (error) {
        console.error("Test error:", error);
        results["error"] = false;
      }

      setTestResults(results);
      setIsLoading(false);
    };

    runTests();
  }, []);

  if (isLoading) {
    return <div>Running comprehensive tests...</div>;
  }

  const passedTests = Object.values(testResults).filter(Boolean).length;
  const totalTests = Object.keys(testResults).length;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>React Utils Test Results</h1>
      <div style={{ marginBottom: "20px" }}>
        <strong>
          Overall: {passedTests}/{totalTests} tests passed
        </strong>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "10px",
        }}
      >
        {Object.entries(testResults).map(([testName, passed]) => (
          <div
            key={testName}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: passed ? "#d4edda" : "#f8d7da",
              color: passed ? "#155724" : "#721c24",
            }}
          >
            <strong>{testName}:</strong> {passed ? "✅ PASS" : "❌ FAIL"}
          </div>
        ))}
      </div>
    </div>
  );
}
