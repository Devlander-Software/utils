/**
 * Creates a debounced function that delays execution until after a specified wait time.
 * 
 * ✅ Works in Node.js, React, and React Native.
 * 
 * @example
 * const debouncedSearch = debounce(searchFunction, 300);
 * debouncedSearch('query') // Will only execute after 300ms of no calls
 * 
 * // In React/React Native:
 * const handleInputChange = debounce((value) => {
 *   // API call or expensive operation
 * }, 500);
 * 
 * @param fn - The function to debounce
 * @param delay - The number of milliseconds to delay
 * @returns A debounced version of the function
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}; 