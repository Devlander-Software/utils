import React, { useState, useEffect } from 'react';
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
import './App.css';

function App() {
  const [debounceCount, setDebounceCount] = useState(0);

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

  // Test debounce
  const debouncedIncrement = debounce(() => {
    setDebounceCount(prev => prev + 1);
  }, 1000);

  useEffect(() => {
    // Test debounce functionality
    const interval = setInterval(() => {
      debouncedIncrement();
    }, 100);
    
    return () => clearInterval(interval);
  }, [debouncedIncrement]);

  return (
    <div className="app">
      <h1>@devlander/utils Test - React Web</h1>
      
      <section className="test-section">
        <h2>String Manipulation</h2>
        <div className="result">
          <strong>Capitalize:</strong> <code>{testString}</code>
        </div>
        <div className="result">
          <strong>Kebab Case:</strong> <code>{testKebab}</code>
        </div>
        <div className="result">
          <strong>Slugify:</strong> <code>{testSlug}</code>
        </div>
        <div className="result">
          <strong>Truncate:</strong> <code>{testTruncate}</code>
        </div>
      </section>

      <section className="test-section">
        <h2>Array Operations</h2>
        <div className="result">
          <strong>Original:</strong> <code>[{testArray.join(', ')}]</code>
        </div>
        <div className="result">
          <strong>Chunks:</strong> <code>{JSON.stringify(testChunks)}</code>
        </div>
        <div className="result">
          <strong>Flatten:</strong> <code>[{testFlatten.join(', ')}]</code>
        </div>
        <div className="result">
          <strong>Shuffle:</strong> <code>[{testShuffle.join(', ')}]</code>
        </div>
      </section>

      <section className="test-section">
        <h2>Object Manipulation</h2>
        <div className="result">
          <strong>Original:</strong> <code>{JSON.stringify(testObj)}</code>
        </div>
        <div className="result">
          <strong>Cloned:</strong> <code>{JSON.stringify(testClone)}</code>
        </div>
      </section>

      <section className="test-section">
        <h2>Mathematical Calculations</h2>
        <div className="result">
          <strong>Format Number:</strong> <code>{testNumber}</code>
        </div>
        <div className="result">
          <strong>Round:</strong> <code>{testRound}</code>
        </div>
        <div className="result">
          <strong>Clamp:</strong> <code>{testClamp}</code>
        </div>
      </section>

      <section className="test-section">
        <h2>Data Validation</h2>
        <div className="result">
          <strong>Allowed Origins:</strong> <code>{JSON.stringify(testOrigins)}</code>
        </div>
      </section>

      <section className="test-section">
        <h2>Debounce Test</h2>
        <div className="result">
          <strong>Debounce Count:</strong> <code>{debounceCount}</code>
          <p>This increments every 100ms but debounce only executes after 1 second of no calls</p>
        </div>
      </section>
    </div>
  );
}

export default App; 