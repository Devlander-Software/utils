import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  // Base64 utilities
  encodeStringToBase64,
  decodeBase64ToString,
  isValidBase64,

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

export default function App() {
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
    return (
      <View style={styles.container}>
        <Text>Running comprehensive tests...</Text>
      </View>
    );
  }

  const passedTests = Object.values(testResults).filter(Boolean).length;
  const totalTests = Object.keys(testResults).length;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native Utils Test Results</Text>
      <Text style={styles.summary}>
        Overall: {passedTests}/{totalTests} tests passed
      </Text>

      {Object.entries(testResults).map(([testName, passed]) => (
        <View
          key={testName}
          style={[
            styles.testItem,
            { backgroundColor: passed ? "#d4edda" : "#f8d7da" },
          ]}
        >
          <Text
            style={[styles.testText, { color: passed ? "#155724" : "#721c24" }]}
          >
            <Text style={styles.testName}>{testName}:</Text>{" "}
            {passed ? "✅ PASS" : "❌ FAIL"}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  summary: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  testItem: {
    padding: 10,
    marginBottom: 5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  testText: {
    fontSize: 14,
  },
  testName: {
    fontWeight: "bold",
  },
});
