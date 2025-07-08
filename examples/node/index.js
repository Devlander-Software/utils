// Dummy test for Node.js example
// Replace 'add' with a real utility from your package
try {
  const { decodeBase64ToString } = require('my-utils');
  console.log(decodeBase64ToString('SGVsbG8gd29ybGQ=')); // Should print 'Hello world'
} catch (e) {
  console.error('Import failed:', e);
  process.exit(1);
} 