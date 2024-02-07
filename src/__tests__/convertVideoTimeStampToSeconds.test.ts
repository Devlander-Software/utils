import { convertVideoTimeStampToSeconds } from "../convertVideoTimeStampToSeconds";

describe("convertVideoTimeStampToSeconds", () => {
  it("should convert a timestamp in the format 'HH:MM:SS' to seconds", () => {
    // Test cases
    expect(convertVideoTimeStampToSeconds("00:00:10")).toBe(10);
    expect(convertVideoTimeStampToSeconds("00:01:30")).toBe(90);
    expect(convertVideoTimeStampToSeconds("01:00:00")).toBe(3600);
    expect(convertVideoTimeStampToSeconds("02:30:45")).toBe(9045);
  });

  it("should handle timestamps with leading zeros", () => {
    expect(convertVideoTimeStampToSeconds("00:00:01")).toBe(1);
    expect(convertVideoTimeStampToSeconds("00:01:01")).toBe(61);
    expect(convertVideoTimeStampToSeconds("01:01:01")).toBe(3661);
    expect(convertVideoTimeStampToSeconds("01:01:10")).toBe(3670);
  });

  it("should handle timestamps with single-digit hours and minutes", () => {
    expect(convertVideoTimeStampToSeconds("0:0:10")).toBe(10);
    expect(convertVideoTimeStampToSeconds("0:10:30")).toBe(630);
    expect(convertVideoTimeStampToSeconds("1:0:0")).toBe(3600);
    expect(convertVideoTimeStampToSeconds("2:30:45")).toBe(9045);
  });

  it("should handle timestamps with only seconds", () => {
    expect(convertVideoTimeStampToSeconds("0:0:1")).toBe(1);
    expect(convertVideoTimeStampToSeconds("0:0:30")).toBe(30);
    expect(convertVideoTimeStampToSeconds("0:0:59")).toBe(59);
  });
});
