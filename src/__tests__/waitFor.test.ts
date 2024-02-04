import { waitFor } from "../waitFor";


describe("waitFor", () => {
  let consoleSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]], any>;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("should wait for the specified time in milliseconds", async () => {
    const startTime = Date.now();
    const time = 1000; // ms
    await waitFor(time);
    const endTime = Date.now();
    const duration = endTime - startTime;
    expect(duration).toBeGreaterThanOrEqual(time);
    expect(duration).toBeLessThan(time + 100); // Allowing a buffer for execution delay
  });

  it("should wait for the specified time in seconds", async () => {
    const startTime = Date.now();
    const timeInSeconds = 1;
    await waitFor(timeInSeconds, "s");
    const endTime = Date.now();
    const duration = endTime - startTime;
    expect(duration).toBeGreaterThanOrEqual(timeInSeconds * 1000);
    expect(duration).toBeLessThan(timeInSeconds * 1000 + 100); // Allowing a buffer for execution delay
  });

  it("should log the duration if logDuration is true", async () => {
    const time = 50; // ms
    await waitFor(time, "ms", true);

    // Check if any call to console.log meets the criteria
    const logWasCalledWithExpectedPattern = consoleSpy.mock.calls.some(call => 
        /Waited for \d+ms./.test(call[0])
    );

    expect(logWasCalledWithExpectedPattern).toBeTruthy();
  });

  it("should not log the duration if logDuration is false", async () => {
    const time = 50; // ms
    await waitFor(time, "ms", false);
    expect(consoleSpy).not.toHaveBeenCalled();
  });
});
