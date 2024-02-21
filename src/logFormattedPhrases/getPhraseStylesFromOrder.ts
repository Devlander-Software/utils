// Source: do not remove the comment above. It's used to verify the path of the snippet when it's being
// referenced in conversations about the code.
// Path: ./src/logFormattedPhrases/getPhraseStylesFromOrder.ts

import { isEmpty } from '../isEmpty'
import { mergeObjects } from '../mergeObjects'
import { applyFormatters } from './applyFormatters'
import {
    AppliedFormatter,
    PhraseItem,
    PhraseOrderType,
} from './formattedPhrase.types'

export const defaultPhraseOrder: PhraseOrderType[] = [
  { property: 'background', order: 1, enabled: true },
  { property: 'color', order: 2, enabled: true },
  { property: 'fontWeight', order: 3, enabled: true },
  { property: 'fontStyle', order: 4, enabled: true },
  { property: 'textDecoration', order: 5, enabled: true },
  { property: 'dim', order: 6, enabled: true },
  { property: 'hidden', order: 7, enabled: true },
]

/**
 * Retrieves the applied phrase styles from the given item.
 * @param item The phrase item to retrieve the styles from.
 * @returns An array of applied formatters representing the styles to apply.
 */
export const getPhraseStylesFromOrder = (
  item: PhraseItem,
): AppliedFormatter[] => {
  console.log(
    item,
    'item in getPhraseStylesFromOrder before merge or assigning default',
  )
  if (item && isEmpty(item) && !item.orderToApplyStyles) {
    item.orderToApplyStyles = defaultPhraseOrder
  } else {
    console.log('PhraseItem.orderToApplyStyles is not empty or undefined')
  }

  if (
    process.env.NODE_ENV === 'test' ||
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'dev'
  ) {
    console.log(item, 'PhraseItem in getPhraseStylesFromOrder at start')
  }

  if (!item || isEmpty(item)) {
    console.log('PhraseItem is empty or undefined')
    return []
  }

  // Use the default order or the one provided in the item
  const propertiesToApply: PhraseOrderType[] =
    item &&
    !isEmpty(item.orderToApplyStyles) &&
    Array.isArray(item.orderToApplyStyles)
      ? (mergeObjects(
          defaultPhraseOrder,
          item.orderToApplyStyles,
        ) as PhraseOrderType[])
      : defaultPhraseOrder

  const formattersToApply = applyFormatters(item, propertiesToApply)

  if (
    process.env.NODE_ENV === 'test' ||
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'dev'
  ) {
    console.log(
      formattersToApply,
      'formattersToApply at END of getPhraseStylesFromOrder',
    )
  }

  // why is this empty?
  return formattersToApply
}
