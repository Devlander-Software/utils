/**
 * Converts a video timestamp string to seconds.
 *
 * @param timestamp - The video timestamp string in the format "HH:MM:SS".
 * @returns The number of seconds represented by the timestamp, or NaN if the timestamp is invalid.
 */
export function convertVideoTimeStampToSeconds(timestamp: string): number {
  const parts: string[] = timestamp.split(":");

  if (parts.length !== 3) {
    throw new Error('Invalid timestamp format. Expected format: "HH:MM:SS"');
  }

  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  const seconds = parseInt(parts[2], 10);

  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
    throw new Error('Invalid timestamp format. Expected format: "HH:MM:SS"');
  }

  if (hours < 0 || minutes < 0 || seconds < 0) {
    throw new Error("Invalid timestamp. Negative values are not allowed.");
  }

  return hours * 3600 + minutes * 60 + seconds;
}
