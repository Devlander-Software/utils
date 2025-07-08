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

console.log('--- @devlander/utils Node.js CLI Test ---');

// String manipulation
console.log('Capitalize:', capitalize('hello world'));
console.log('Kebab Case:', kebabCase('Hello World Test'));
console.log('Slugify:', slugify('Hello World! This is a test.'));
console.log('Truncate:', truncate('This is a very long string that should be truncated', 20));

// Array operations
const testArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('Chunk Array:', chunkArray(testArray, 3));
console.log('Flatten Array:', flattenArray([1, [2, 3], [4, [5, 6]]]));
console.log('Shuffle Array:', shuffleArray([...testArray]));

// Object manipulation
const testObj = { a: 1, b: { c: 2, d: [3, 4] } };
console.log('Deep Clone:', deepClone(testObj));

// Mathematical calculations
console.log('Format Number:', formatNumberWithCommas(1234567));
console.log('Round:', roundToDecimal(3.14159, 2));
console.log('Clamp:', clamp(150, 0, 100));

// Data validation
console.log('Allowed Origins:', generateAllowedOrigins(['https://example.com', 'https://test.com']));

// Debounce (demonstration)
const debouncedLog = debounce((msg: string) => {
  console.log('Debounced:', msg);
}, 1000);

debouncedLog('This should appear after 1 second of no calls');
setTimeout(() => debouncedLog('Another call'), 500);
setTimeout(() => debouncedLog('Final call'), 1200); 