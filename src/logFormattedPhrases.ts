/* eslint-disable @typescript-eslint/no-explicit-any */
import pico from 'picocolors';
import { abbreviateNumber } from './abbreviateNumber';
import { isJson } from './isJson';

export type PhraseBackgroundColors =
  | 'bgBlack'
  | 'bgRed'
  | 'bgGreen'
  | 'bgYellow'
  | 'bgBlue'
  | 'bgMagenta'
  | 'bgCyan'
  | 'bgWhite';
export type PhraseTextColors =
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'white'
  | 'gray';

export interface PhraseItem {
  phrase: string;
  color?: PhraseTextColors;
  background?: PhraseBackgroundColors;
}

const formatPhrase = (
  phrase: string,
  color: PhraseTextColors = 'white',
  background: PhraseBackgroundColors = 'bgBlack'
): void => {
  const colorFunc = color ? pico[color] : pico.white;
  const backgroundFunc = background ? pico[background] : pico.bgBlack;
  console.log(backgroundFunc(colorFunc(phrase)));
};

/**
 * Logs formatted phrases with a specified value and an array of phrase items.
 *
 * @param value - The value to be logged. It can be a string, number, or object.
 * @param phrases - An array of phrase items containing the phrase, color, and background styles.
 */
export const logFormattedPhrases = (
  value: string | number | Record<string, any>,
  phrases: PhraseItem[]
): void => {
  let valueString: string;

  if (typeof value === 'number') {
    valueString = abbreviateNumber(value) as string;
  } else if (typeof value === 'string') {
    valueString = JSON.stringify(value);
  } else {
    const isValidJson = isJson(value);
    valueString = !isValidJson ? JSON.stringify(value) : JSON.stringify(value, null, 2);
  }

  console.log('valueString:', valueString);

  if (phrases.length === 0) {
    // Default log if no phrases provided
    formatPhrase(valueString);
  } else {
    // Log each phrase with specified styles
    phrases.forEach(({ phrase, color, background }) => {
      const combinedPhrase = `${phrase}: ${valueString}`;
      formatPhrase(combinedPhrase, color, background);
    });
  }
};


// describe('logFormattedPhrases', () => {
//   it('should log the formatted value when no phrases are provided', () => {
//     const value = 'Hello, World!';
//     const phrases: PhraseItem[] = [];

//     const consoleSpy = jest.spyOn(console, 'log');

//     logFormattedPhrases(value, phrases);

//     expect(consoleSpy).toHaveBeenCalledWith(value);
//   });

//   it('should log each phrase with the specified styles', () => {
//     const value = 42;
//     const phrases: PhraseItem[] = [
//       { phrase: 'HELLO', color: 'red', background: 'bgWhite' },
//       { phrase: 'Phrase 2', color: 'blue', background: 'bgGreen' },
//     ];

//     const consoleSpy = jest.spyOn(console, 'log');

//     logFormattedPhrases(value, phrases);

//     expect(consoleSpy).toHaveBeenCalledWith('HELLO');
//     expect(consoleSpy).toHaveBeenCalledWith('Phrase 2');
//   });

//   it('should abbreviate the number value before logging', () => {
//     const value = 1000000;
//     const phrases: PhraseItem[] = [];

//     const consoleSpy = jest.spyOn(console, 'log');

//     logFormattedPhrases(value, phrases);

//     expect(consoleSpy).toHaveBeenCalledWith('1m');
//   });

//   it('should stringify the object value before logging', () => {
//     const value = { key: 'value' };
//     const phrases: PhraseItem[] = [];

//     const consoleSpy = jest.spyOn(console, 'log');

//     logFormattedPhrases(value, phrases);

//     expect(consoleSpy).toHaveBeenCalledWith('"{\"key\":\"value\"}"');
//   });
// }
