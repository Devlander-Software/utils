/**
 * Randomizes the order of elements in an array using the Fisher-Yates shuffle algorithm.
 * 
 * @param array - The array to shuffle.
 * @returns A new array with the same elements in random order.
 * 
 * @example
 * ```typescript
 * shuffleArray([1, 2, 3, 4, 5]); // Returns: [3, 1, 5, 2, 4] (random order)
 * shuffleArray(['a', 'b', 'c']); // Returns: ['c', 'a', 'b'] (random order)
 * shuffleArray([]); // Returns: []
 * ```
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  if (!Array.isArray(array) || array.length <= 1) {
    return [...array];
  }
  
  const shuffled = [...array];
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}; 