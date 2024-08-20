export type TimeUnits = "ms" | "s";
export interface WaitFor {
    (value: number, timeUnits?: TimeUnits, logDuration?: boolean): Promise<void>;
}
/**
 * Waits for a specified amount of time before resolving a promise.
 * @param value - The value representing the time to wait.
 * @param timeUnits - Optional. The units of time for the value. Defaults to "ms" if not provided.
 * @param logDuration - Optional. Specifies whether to log the duration of the wait. Defaults to false if not provided.
 * @returns A promise that resolves after the specified time has elapsed.
 */
export declare const waitFor: WaitFor;
