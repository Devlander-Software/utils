import { formatRangeOrPercentage, PercentagePrefixEnum, RangeOrAmountEnum } from "../formatRangeOrPercent";

describe('formatRangeOrPercentage', () => {
  // Test case for formatting as a range with prefix and suffix
  it('should format as a range with prefix and suffix', () => {
    const result = formatRangeOrPercentage({
      details: "Usage",
      formatAsRangeOrAmount: RangeOrAmountEnum.Range,
      percentagePrefix: PercentagePrefixEnum.UpTo,
      minPercent: 10,
      maxPercent: 20,
      percentageSuffix: "% or higher",
    });
    expect(result).toBe("(up to 10 - 20% or higher) Usage");
  });

  // Test case for formatting as a single percentage amount
  it('should format as a single percentage amount', () => {
    const result = formatRangeOrPercentage({
      details: "Rate",
      formatAsRangeOrAmount: RangeOrAmountEnum.Amount,
      percent: 50,
    });
    expect(result).toBe("(50%) Rate");
  });

  // Test case for formatting without range or amount (details only)
  it('should format with details only if RangeOrAmountEnum.None is set', () => {
    const result = formatRangeOrPercentage({
      details: "Performance",
      formatAsRangeOrAmount: RangeOrAmountEnum.None,
    });
    expect(result).toBe("Performance");
  });

  // Test case for formatting as a range without prefix or suffix
  it('should format as a range without prefix or suffix', () => {
    const result = formatRangeOrPercentage({
      details: "Range Detail",
      formatAsRangeOrAmount: RangeOrAmountEnum.Range,
      minPercent: 15,
      maxPercent: 25,
    });
    expect(result).toBe("(15 - 25%) Range Detail");
  });

  // Test case for formatting as an amount with prefix only
  it('should format as an amount with prefix only', () => {
    const result = formatRangeOrPercentage({
      details: "Limit",
      formatAsRangeOrAmount: RangeOrAmountEnum.Amount,
      percent: 75,
      percentagePrefix: PercentagePrefixEnum.About,
    });
    expect(result).toBe("(about 75%) Limit");
  });

  // Test case for formatting as an amount with both prefix and suffix
  it('should format as an amount with both prefix and suffix', () => {
    const result = formatRangeOrPercentage({
      details: "Expected Completion",
      formatAsRangeOrAmount: RangeOrAmountEnum.Amount,
      percent: 80,
      percentagePrefix: PercentagePrefixEnum.Approximately,
      percentageSuffix: "of completion",
    });
    expect(result).toBe("(approximately 80% of completion) Expected Completion");
  });

  // Test case for handling empty details
  it('should return empty string if details are empty and no format is applied', () => {
    const result = formatRangeOrPercentage({
      details: "",
      formatAsRangeOrAmount: RangeOrAmountEnum.None,
    });
    expect(result).toBe("");
  });

  // Test case for handling unspecified options (default behavior)
  it('should use default values if options are not fully specified', () => {
    const result = formatRangeOrPercentage({
      details: "Default Test"
    });
    expect(result).toBe("Default Test");
  });
});
