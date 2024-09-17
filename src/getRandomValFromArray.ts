/**
 * Fetches a random value from the provided array.
 * @param arr - The array to select a random value from.
 * @param fallbackValue - A fallback value to return if the array is empty or undefined.
 * @returns A random value from the array or the fallback value.
 */
export const getRandomValFromArray = <T>(arr: T[], fallbackValue: T): T => {
  if (arr.length === 0) return fallbackValue; // Return fallbackValue if array is empty
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex] ?? fallbackValue; // Use nullish coalescing operator to handle undefined values
};
