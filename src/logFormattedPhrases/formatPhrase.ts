import { PhraseItem, PhraseOrderType } from './formattedPhrase.types'
import { getPhraseStylesFromOrder } from './getPhraseStylesFromOrder'

// Function to format a phrase with the given styles
export const formatPhrase = (
  item: PhraseItem,
): void | {
  message: string
  formattersApplied: PhraseOrderType['property'][]
} => {
  try {
    console.log('inside of formatPhrase')
    if (
      typeof item === 'undefined' ||
      item === null ||
      (item && !item.phrase)
    ) {
      return
    }

    const getFormatters = getPhraseStylesFromOrder(item)
    let tempPhrase = item.phrase

    const environmentsToLog = item.allowedInEnvironments
      ? item.allowedInEnvironments
      : undefined
    const currentEnvironment = item.currentEnvironment
      ? item.currentEnvironment
      : undefined

    const allowedToLog =
      currentEnvironment &&
      environmentsToLog &&
      environmentsToLog.includes(currentEnvironment)
        ? true
        : !currentEnvironment && !environmentsToLog
          ? true
          : false

    for (const formatItem of getFormatters) {
      if (formatItem.formatter !== undefined) {
        const { formatter } = formatItem
        tempPhrase = formatter(tempPhrase)
      }
      if (
        process.env.NODE_ENV === 'test' ||
        process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'dev'
      ) {
        console.log(tempPhrase)
      }
    }
    const result = {
      message: item.phrase,
      formattersApplied: getFormatters.map((formatter) => formatter.name),
    }

    console.log(result, 'result in formatPhrase')

    if (allowedToLog) {
      console.log(tempPhrase)
      return result
    }
  } catch (e) {
    throw new Error(String(e))
  }
}
