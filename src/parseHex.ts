import { isHexColor } from './isHexColor';

export interface HexObject {
  r: string;
  g: string;
  b: string;
  a: string;
}

export const parseHex = (hexString: string): HexObject => {
  if (!hexString || typeof hexString !== 'string') {
    throw new Error('Invalid hex color');
  }

  const hashlessHex = hexString.replace(/^#/, '');

  if (!isHexColor(`#${hashlessHex}`)) {
    throw new Error('Invalid hex color');
  }

  const isShort = hashlessHex.length === 3 || hashlessHex.length === 4;
  const expandHex = (shortHex: string): string => shortHex.repeat(2);

  if (![3, 4, 6, 8].includes(hashlessHex.length)) {
    throw new Error('Invalid hex color length');
  }

  const twoDigitHexR = isShort ? expandHex(hashlessHex.slice(0, 1)) : hexString.slice(0, 2);
  const twoDigitHexG = isShort ? expandHex(hexString.slice(1, 2)) : hexString.slice(2, 4);
  const twoDigitHexB = isShort ? expandHex(hexString.slice(2, 3)) : hexString.slice(4, 6);
  const twoDigitHexA = (isShort ? expandHex(hexString.slice(3, 4)) : hexString.slice(6, 8)) || 'ff';

  return {
    r: twoDigitHexR,
    g: twoDigitHexG,
    b: twoDigitHexB,
    a: twoDigitHexA
  };
};
