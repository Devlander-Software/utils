/**
 * Calculates the average of an array of numbers.
 *
 * @param {number[]} nums - The array of numbers to calculate the average of.
 * @returns {number} The average of the numbers in the array.
 * @throws {Error} If the input is not a non-empty array of numbers.
 * @throws {Error} If any element in the array is not a valid number.
 */
export function getAverage(arr: number[]): number {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array of numbers.");
  }

  if (!arr.every((num) => typeof num === "number" && !isNaN(num))) {
    throw new Error("All elements in the array must be valid numbers.");
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}
