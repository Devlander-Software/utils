import { PhraseItem, logFormattedPhrases } from '../logFormattedPhrases';

describe('logFormattedPhrases', () => {
  it('should log the formatted value when no phrases are provided', () => {
    const value = 'Hello, World!';
    const phrases: PhraseItem[] = [];

    const consoleSpy = jest.spyOn(console, 'log');

    logFormattedPhrases(value, phrases);

    expect(consoleSpy).toHaveBeenCalledWith(value);
  });

  it('should log each phrase with the specified styles', () => {
    const value = 42;
    const phrases: PhraseItem[] = [
      { phrase: 'HELLO', color: 'red', background: 'bgWhite' },
      { phrase: 'Phrase 2', color: 'blue', background: 'bgGreen' },
    ];

    const consoleSpy = jest.spyOn(console, 'log');

    logFormattedPhrases(value, phrases);

    expect(consoleSpy).toHaveBeenCalledWith('HELLO');
    expect(consoleSpy).toHaveBeenCalledWith('Phrase 2');
  });

  it('should abbreviate the number value before logging', () => {
    const value = 1000000;
    const phrases: PhraseItem[] = [];

    const consoleSpy = jest.spyOn(console, 'log');

    logFormattedPhrases(value, phrases);

    expect(consoleSpy).toHaveBeenCalledWith('1m');
  });

  it('should stringify the object value before logging', () => {
    const value = { key: 'value' };
    const phrases: PhraseItem[] = [];

    const consoleSpy = jest.spyOn(console, 'log');

    logFormattedPhrases(value, phrases);

    expect(consoleSpy).toHaveBeenCalledWith('"{\"key\":\"value\"}"');
  });
});
