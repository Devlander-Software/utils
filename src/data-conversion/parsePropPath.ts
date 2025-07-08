import { matchAll } from "./matchAll";

export function parsePropPath(name: string): string[] {
  const matches = matchAll(/\w+|\[(\w*)]/g, name);
  const propPath: string[] = [];

  for (const match of matches) {
    const [fullMatch, innerMatch] = match;
    const prop = innerMatch || fullMatch;
    propPath.push(prop);
  }

  return propPath;
}
