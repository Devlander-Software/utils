import { bind } from "../bind";

describe("bind", () => {
  it("should bind the function to the specified context", () => {
    const context = {
      value: 42,
      getValue() {
        return this.value;
      },
    };

    const boundFn = bind(context.getValue, context);
    const result = boundFn();

    expect(result).toBe(42);
  });

  it("should return the correct return type", () => {
    const context = {
      greet(name: string): string {
        return `Hello, ${name}!`;
      },
    };

    const boundFn = bind(context.greet as any, context);
    const result = boundFn("John");

    expect(result).toBe("Hello, John!");
  });
});
