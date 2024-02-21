import pico from 'picocolors'
import { Formatter } from 'picocolors/types'
import { PhraseColors } from './formattedPhrase.types'
// Helper function to get the correct pico function for background color
export const getPhraseBackground = (color: PhraseColors): Formatter => {
  const colorMap: { [key: string]: Formatter } = {
    black: pico.bgBlack,
    red: pico.bgRed,
    green: pico.bgGreen,
    yellow: pico.bgYellow,
    blue: pico.bgBlue,
    magenta: pico.bgMagenta,
    cyan: pico.bgCyan,
    white: pico.bgWhite,
  }

  const functionToReturn: Formatter = colorMap[color] || pico.bgBlack // Default to bgBlack if color not found
  return functionToReturn
}
