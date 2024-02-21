import pico from 'picocolors'
import { Formatter } from 'picocolors/types'
import {
    AppliedFormatter,
    PhraseColors,
    PhraseItem,
    PhraseOrderType,
} from './formattedPhrase.types'
import { getPhraseBackground } from './getPhraseBackground'

export const applyFormatters = (
  phraseItem: PhraseItem,
  styleOrder: PhraseOrderType[],
): AppliedFormatter[] => {
  if (typeof styleOrder === 'undefined' || styleOrder === null || !styleOrder) {
    return []
  }
  const appliedStyles: AppliedFormatter[] = []

  // Define which properties are expected to have string values vs. boolean flags
  const valueBasedProperties = [
    'color',
    'fontWeight',
    'fontStyle',
    'background',
    'textDecoration',
  ]
  const booleanProperties = ['dim', 'hidden']

  const picoValues: { [key: string]: Formatter } = {
    black: pico.black,
    red: pico.red,
    green: pico.green,
    yellow: pico.yellow,
    blue: pico.blue,
    magenta: pico.magenta,
    cyan: pico.cyan,
    white: pico.white,
    dim: pico.dim,
    hidden: pico.hidden,
  }

  if (styleOrder && Array.isArray(styleOrder) && styleOrder.length > 0) {
    styleOrder.forEach((style) => {
      const { property, enabled } = style
      const propertyValue = phraseItem[property as keyof PhraseItem]

      // Skip if the style is not enabled or the property does not exist in the phrase item
      if (!enabled || !propertyValue) return

      if (valueBasedProperties.includes(property)) {
        // Handle properties associated with specific values (e.g., color, background)
        let formatFunction: Formatter = pico.white

        if (property === 'background') {
          // Use a custom function for background colors
          formatFunction = getPhraseBackground(propertyValue as PhraseColors)
        } else {
          const picoFunc = picoValues[propertyValue as keyof typeof picoValues]

          console.log(picoFunc, 'picoFunc in applyFormatters')

          // Use pico formatter if available
          formatFunction = picoFunc as Formatter
        }

        console.log(' RIGHT BEFORE PUSHING TO APPLIED STYLES')
        console.log(formatFunction, 'formatFunction in applyFormatters')
        console.log(propertyValue, 'propertyValue in applyFormatters')

        appliedStyles.push({
          name: property,
          formatter: formatFunction,
          value: propertyValue.toString(),
        })
      } else if (booleanProperties.includes(property)) {
        // Handle boolean properties (e.g., dim, hidden)
        const formatterFunc = pico[property as keyof typeof pico] as Formatter
        if (formatterFunc) {
          appliedStyles.push({
            name: property,
            formatter: formatterFunc,
            value: 'true', // The value is just a placeholder for boolean properties
          })
        }
      }
    })
  }

  return appliedStyles
}
