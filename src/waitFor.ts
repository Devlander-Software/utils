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
export const waitFor: WaitFor = (value: number, timeUnits?: TimeUnits, logDuration?: boolean) => {

    if(timeUnits !== "ms" && timeUnits !== "s") {
        timeUnits = "ms";
    }

    if(typeof logDuration !== "boolean" || typeof logDuration === "undefined") {
        logDuration = false;
    }

    const startTime = Date.now();
    const time = timeUnits === "ms" ? value : value * 1000;
    const logForConsole = logDuration && logDuration.toString() === 'true'? console.log : () => {};

    return new Promise<void>((resolve) => {
        setTimeout(() => {
            if (logDuration && logDuration.toString() === 'true') {
                
                const endTime = Date.now();
                const durationMs = endTime - startTime;
                // Adjust the logging to reflect the time in the correct unit, based on the 'timeUnits' parameter
                const duration = timeUnits === "ms" ? durationMs : durationMs / 1000;
                const unit = timeUnits === "ms" ? "ms" : "s";
                logForConsole(`Waited for ${duration}${unit}.`);
            }
            resolve();
        }, time);
    });
};

// This function can now be called with any combination of arguments, including none for 'timeUnits' and 'logDuration':
// waitFor(500); // Uses default values: logs nothing and assumes 'ms'
// waitFor(1, "s", true); // Waits for 1 second and logs the duration
