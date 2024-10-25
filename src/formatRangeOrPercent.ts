export enum RangeOrAmountEnum {
  None = ' ',
  Range = 'Range',
  Amount = 'Amount',
}

export enum PercentagePrefixEnum {
  Empty = ' ',
  UpTo = 'up to',
  About = 'about',
  Around = 'around',
  Approximately = 'approximately',
}

interface FormatDetailOptions {
  details: string
  formatAsRangeOrAmount?: RangeOrAmountEnum | keyof typeof RangeOrAmountEnum
  percentagePrefix?: PercentagePrefixEnum | keyof typeof PercentagePrefixEnum
  percentageSuffix?: string
  minPercent?: number
  maxPercent?: number
  percent?: number
}

/**
 * Formats a detail string with optional range, percentage, prefix, and suffix.
 * This function allows customization in formatting a detail string based on the specified options,
 * including support for range, percentage, or additional prefix/suffix customization.
 *
 * - If `formatAsRangeOrAmount` is set to `RangeOrAmountEnum.Range`, it formats as a range using
 *   `minPercent` and `maxPercent`.
 * - If `formatAsRangeOrAmount` is set to `RangeOrAmountEnum.Amount`, it formats as a single percentage value.
 * - If `formatAsRangeOrAmount` is set to `RangeOrAmountEnum.None`, only `details` is returned.
 * - Optional parentheses are added around the range or percentage if `percentagePrefix` or `percentageSuffix` is specified.
 *
 * ### Formatting Examples:
 *
 * 1. **Range with Prefix and Suffix**
 *    - Input: `{ details: "Usage", formatAsRangeOrAmount: RangeOrAmountEnum.Range, percentagePrefix: PercentagePrefixEnum.UpTo, minPercent: 10, maxPercent: 20, percentageSuffix: "% or higher" }`
 *    - Output: `(up to 10 - 20% or higher) Usage`
 *
 * 2. **Single Percentage Amount**
 *    - Input: `{ details: "Rate", formatAsRangeOrAmount: RangeOrAmountEnum.Amount, percent: 50 }`
 *    - Output: `(50%) Rate`
 *
 * 3. **No Range or Amount Formatting (Details Only)**
 *    - Input: `{ details: "Performance", formatAsRangeOrAmount: RangeOrAmountEnum.None }`
 *    - Output: `Performance`
 *
 * 4. **Range without Prefix or Suffix**
 *    - Input: `{ details: "Range Detail", formatAsRangeOrAmount: RangeOrAmountEnum.Range, minPercent: 15, maxPercent: 25 }`
 *    - Output: `(15 - 25%) Range Detail`
 *
 * 5. **Amount with Prefix Only**
 *    - Input: `{ details: "Limit", formatAsRangeOrAmount: RangeOrAmountEnum.Amount, percent: 75, percentagePrefix: PercentagePrefixEnum.About }`
 *    - Output: `(about 75%) Limit`
 *
 * @param options - Options to control the detail formatting.
 * @param options.details - The base detail string to format.
 * @param options.formatAsRangeOrAmount - Specifies whether to format as a range, amount, or none.
 * Defaults to `RangeOrAmountEnum.None`.
 * @param options.percentagePrefix - Optional prefix to add before the percentage or range.
 * Defaults to `PercentagePrefixEnum.Empty`.
 * @param options.percentageSuffix - Optional suffix to add after the percentage or range.
 * @param options.percent - The percentage value to use if `formatAsRangeOrAmount` is `RangeOrAmountEnum.Amount`.
 * Defaults to `0`.
 * @param options.minPercent - The minimum percentage for the range if `formatAsRangeOrAmount` is `RangeOrAmountEnum.Range`.
 * Defaults to `0`.
 * @param options.maxPercent - The maximum percentage for the range if `formatAsRangeOrAmount` is `RangeOrAmountEnum.Range`.
 * Defaults to `0`.
 *
 * @returns A formatted string based on the specified range, percentage, prefix, suffix, and details.
 */
export const formatRangeOrPercentage = (
  options: FormatDetailOptions,
): string => {
  const {
    details = '',
    formatAsRangeOrAmount = RangeOrAmountEnum.None,
    percentagePrefix = PercentagePrefixEnum.Empty,
    percentageSuffix = '',
    percent = 0,
    minPercent = 0,
    maxPercent = 0,
  } = options

  const shouldShowParenthesis = (
    percentagePrefix: string,
    percentageSuffix: string,
    formatAsRangeOrAmount: RangeOrAmountEnum | keyof typeof RangeOrAmountEnum,
  ) => {
    return (
      percentagePrefix.trim() !== '' ||
      percentageSuffix.trim() !== '' ||
      formatAsRangeOrAmount === RangeOrAmountEnum.Range ||
      formatAsRangeOrAmount === RangeOrAmountEnum.Amount
    )
  }

  const showParenthesis = shouldShowParenthesis(
    percentagePrefix,
    percentageSuffix,
    formatAsRangeOrAmount,
  )

  // For the range, append `%` only if `percentageSuffix` doesn't already contain `%`
  const formattedRangeOrAmount =
    formatAsRangeOrAmount === RangeOrAmountEnum.Amount
      ? `${percent}%`
      : formatAsRangeOrAmount === RangeOrAmountEnum.Range
        ? `${minPercent} - ${maxPercent}${percentageSuffix.includes('%') ? '' : '%'}`
        : ''

  let formattedDetails = ''

  if (formatAsRangeOrAmount === RangeOrAmountEnum.Range) {
    formattedDetails = `${showParenthesis ? '(' : ''}${
      percentagePrefix.trim() ? `${percentagePrefix} ` : ''
    }${formattedRangeOrAmount}${
      percentageSuffix.trim() ? percentageSuffix : ''
    }${showParenthesis ? ')' : ''} ${details.trim()}`
  } else if (formatAsRangeOrAmount === RangeOrAmountEnum.Amount) {
    formattedDetails = `(${
      percentagePrefix.trim() ? `${percentagePrefix} ` : ''
    }${percent}%${percentageSuffix.trim() ? ` ${percentageSuffix}` : ''}) ${details.trim()}`
  } else if (formatAsRangeOrAmount === RangeOrAmountEnum.None) {
    formattedDetails = details.trim()
  }

  return formattedDetails
}
