import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { 
  capitalize, 
  chunkArray, 
  debounce, 
  deepClone, 
  formatNumberWithCommas,
  kebabCase,
  slugify,
  truncate,
  roundToDecimal,
  clamp,
  flattenArray,
  shuffleArray,
  generateAllowedOrigins
} from '@devlander/utils';

export default function App() {
  // Test string manipulation
  const testString = capitalize('hello world');
  const testKebab = kebabCase('Hello World Test');
  const testSlug = slugify('Hello World! This is a test.');
  const testTruncate = truncate('This is a very long string that should be truncated', 20);

  // Test array operations
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const testChunks = chunkArray(testArray, 3);
  const testFlatten = flattenArray([1, [2, 3], [4, [5, 6]]]);
  const testShuffle = shuffleArray([...testArray]);

  // Test object manipulation
  const testObj = { a: 1, b: { c: 2, d: [3, 4] } };
  const testClone = deepClone(testObj);

  // Test mathematical calculations
  const testNumber = formatNumberWithCommas(1234567);
  const testRound = roundToDecimal(3.14159, 2);
  const testClamp = clamp(150, 0, 100);

  // Test data validation
  const testOrigins = generateAllowedOrigins(['https://example.com', 'https://test.com']);

  // Test debounce (will be used in a real scenario)
  const debouncedLog = debounce((message: string) => {
    console.log('Debounced:', message);
  }, 1000);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>@devlander/utils Test</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>String Manipulation</Text>
        <Text style={styles.result}>Capitalize: {testString}</Text>
        <Text style={styles.result}>Kebab Case: {testKebab}</Text>
        <Text style={styles.result}>Slugify: {testSlug}</Text>
        <Text style={styles.result}>Truncate: {testTruncate}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Array Operations</Text>
        <Text style={styles.result}>Original: [{testArray.join(', ')}]</Text>
        <Text style={styles.result}>Chunks: {JSON.stringify(testChunks)}</Text>
        <Text style={styles.result}>Flatten: [{testFlatten.join(', ')}]</Text>
        <Text style={styles.result}>Shuffle: [{testShuffle.join(', ')}]</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Object Manipulation</Text>
        <Text style={styles.result}>Original: {JSON.stringify(testObj)}</Text>
        <Text style={styles.result}>Cloned: {JSON.stringify(testClone)}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mathematical Calculations</Text>
        <Text style={styles.result}>Format Number: {testNumber}</Text>
        <Text style={styles.result}>Round: {testRound}</Text>
        <Text style={styles.result}>Clamp: {testClamp}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data Validation</Text>
        <Text style={styles.result}>Allowed Origins: {JSON.stringify(testOrigins)}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  result: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
    fontFamily: 'monospace',
  },
}); 