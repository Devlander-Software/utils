import {
  decodeBase64ToString,
  encodeStringToBase64,
  isValidBase64,
  convertBlobToBase64WebAsync,
  convertBlobToBase64NativeAsync,
  isValidBlob,
} from "../base64-utilities";

describe("Base64 Utilities", () => {
  describe("decodeBase64ToString", () => {
    it("should decode base64 string to UTF-8 string", () => {
      const base64Input = "SGVsbG8gV29ybGQ=";
      const expected = "Hello World";
      expect(decodeBase64ToString(base64Input)).toBe(expected);
    });

    it("should decode base64 string with Unicode characters", () => {
      const base64Input = "4pyT"; // "✓"
      const expected = "✓";
      expect(decodeBase64ToString(base64Input)).toBe(expected);
    });

    it("should decode empty base64 string", () => {
      const base64Input = "";
      const expected = "";
      expect(decodeBase64ToString(base64Input)).toBe(expected);
    });

    it("should handle base64 string with padding", () => {
      const base64Input = "dGVzdA==";
      const expected = "test";
      expect(decodeBase64ToString(base64Input)).toBe(expected);
    });
  });

  describe("encodeStringToBase64", () => {
    it("should encode UTF-8 string to base64", () => {
      const input = "Hello World";
      const expected = "SGVsbG8gV29ybGQ=";
      expect(encodeStringToBase64(input)).toBe(expected);
    });

    it("should encode string with Unicode characters", () => {
      const input = "✓";
      const expected = "4pyT";
      expect(encodeStringToBase64(input)).toBe(expected);
    });

    it("should encode empty string", () => {
      const input = "";
      const expected = "";
      expect(encodeStringToBase64(input)).toBe(expected);
    });

    it("should encode special characters", () => {
      const input = "test@example.com";
      const expected = "dGVzdEBleGFtcGxlLmNvbQ==";
      expect(encodeStringToBase64(input)).toBe(expected);
    });
  });

  describe("isValidBase64", () => {
    it("should return true for valid base64 string", () => {
      expect(isValidBase64("SGVsbG8gV29ybGQ=")).toBe(true);
      expect(isValidBase64("dGVzdA==")).toBe(true);
      expect(isValidBase64("YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXo=")).toBe(true);
    });

    it("should return false for invalid base64 string", () => {
      expect(isValidBase64("SGVsbG8gV29ybGQ!")).toBe(false); // Invalid character
      expect(isValidBase64("SGVsbG8gV29ybGQ===")).toBe(false); // Invalid padding
    });

    it("should return false for non-string inputs", () => {
      expect(isValidBase64(null as any)).toBe(false);
      expect(isValidBase64(undefined as any)).toBe(false);
      expect(isValidBase64(123 as any)).toBe(false);
      expect(isValidBase64({} as any)).toBe(false);
    });

    it("should return false for empty string", () => {
      expect(isValidBase64("")).toBe(false);
    });

    it("should handle base64 strings without padding", () => {
      expect(isValidBase64("SGVsbG8gV29ybGQ")).toBe(true); // No padding, valid
      expect(isValidBase64("dGVzdA")).toBe(true); // No padding, valid
    });
  });

  describe("isValidBlob", () => {
    it("should return true for valid Blob object", () => {
      const blob = new Blob(["test"], { type: "text/plain" });
      expect(isValidBlob(blob)).toBe(true);
    });

    it("should return false for non-Blob objects", () => {
      expect(isValidBlob("not a blob")).toBe(false);
      expect(isValidBlob(123)).toBe(false);
      expect(isValidBlob({})).toBe(false);
      expect(isValidBlob(null)).toBe(false);
      expect(isValidBlob(undefined)).toBe(false);
    });

    it("should return false when Blob is not available", () => {
      const originalBlob = global.Blob;
      delete (global as any).Blob;

      const fakeBlob = { type: "text/plain" };
      expect(isValidBlob(fakeBlob)).toBe(false);

      global.Blob = originalBlob;
    });
  });

  describe("convertBlobToBase64WebAsync", () => {
    it("should convert Blob to base64 string", async () => {
      const blob = new Blob(["Hello World"], { type: "text/plain" });
      const result = await convertBlobToBase64WebAsync(blob);

      expect(result).toMatch(/^data:text\/plain;base64,/);
      expect(result).toContain("SGVsbG8gV29ybGQ=");
    });

    it("should reject for invalid Blob", async () => {
      await expect(
        convertBlobToBase64WebAsync("not a blob" as any),
      ).rejects.toThrow("The provided value is not a valid Blob.");
    });

    it("should handle empty Blob", async () => {
      const blob = new Blob([], { type: "text/plain" });
      const result = await convertBlobToBase64WebAsync(blob);

      expect(result).toMatch(/^data:text\/plain;base64,/);
    });
  });

  describe("convertBlobToBase64NativeAsync", () => {
    it("should convert Blob to base64 string", async () => {
      const blob = new Blob(["Hello World"], { type: "text/plain" });
      const result = await convertBlobToBase64NativeAsync(blob);

      expect(result).toMatch(/^data:text\/plain;base64,/);
      expect(result).toContain("SGVsbG8gV29ybGQ=");
    });

    it("should reject for invalid Blob", async () => {
      await expect(
        convertBlobToBase64NativeAsync("not a blob" as any),
      ).rejects.toThrow("The provided value is not a valid Blob.");
    });

    it("should handle empty Blob", async () => {
      const blob = new Blob([], { type: "text/plain" });
      const result = await convertBlobToBase64NativeAsync(blob);

      expect(result).toMatch(/^data:text\/plain;base64,/);
    });
  });

  describe("Round-trip encoding/decoding", () => {
    it("should encode and decode string correctly", () => {
      const original = "Hello World! 👋";
      const encoded = encodeStringToBase64(original);
      const decoded = decodeBase64ToString(encoded);

      expect(decoded).toBe(original);
    });

    it("should handle special characters in round-trip", () => {
      const original = "test@example.com + special/chars";
      const encoded = encodeStringToBase64(original);
      const decoded = decodeBase64ToString(encoded);

      expect(decoded).toBe(original);
    });
  });
});
