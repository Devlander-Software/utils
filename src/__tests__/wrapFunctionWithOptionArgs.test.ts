import { wrapFunctionWithOptionalArgs } from "../development-tools/wrapFunctionWithOptionalArgs";

describe("wrapFunctionWithOptionalArgs", () => {
  it("should call the original function with required and optional arguments", () => {
    const fn = jest.fn((a: number, b: number, options: number[]) => {});
    const wrappedFn = wrapFunctionWithOptionalArgs(fn);

    wrappedFn(1, 2, 3, 4, 5);

    expect(fn).toHaveBeenCalledWith(1, 2, [3, 4, 5]);
  });

  it("should handle the case when there are no optional arguments", () => {
    const fn = jest.fn((a: number, b: number, options: number[]) => {});
    const wrappedFn = wrapFunctionWithOptionalArgs(fn);

    wrappedFn(1, 2);

    expect(fn).toHaveBeenCalledWith(1, 2, []);
  });

  it("should handle different types of arguments", () => {
    const fn = jest.fn((a: string, b: string, options: string[]) => {});
    const wrappedFn = wrapFunctionWithOptionalArgs(fn);

    wrappedFn("first", "second", "third", "fourth");

    expect(fn).toHaveBeenCalledWith("first", "second", ["third", "fourth"]);
  });
});
