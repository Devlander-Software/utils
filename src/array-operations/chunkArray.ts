/**
 * Breaks an array into smaller chunks of the specified size.
 * 
 * ✅ Works in Node.js, React, and React Native.
 * 
 * @example
 * chunkArray([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 * chunkArray([1, 2, 3, 4], 3) // [[1, 2, 3], [4]]
 * chunkArray([1, 2, 3], 1) // [[1], [2], [3]]
 * chunkArray([], 2) // []
 * 
 * @param array - The array to split into chunks
 * @param size - The maximum size of each chunk
 * @returns An array of arrays, each containing up to 'size' elements
 */
export const chunkArray = <T>(array: T[], size: number): T[][] => {
  if (!Array.isArray(array) || typeof size !== 'number' || size <= 0) {
    return [];
  }
  
  const chunks: T[][] = [];
  
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  
  return chunks;
}; 