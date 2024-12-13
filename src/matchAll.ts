export const matchAll = (regExp: RegExp, str: string): RegExpMatchArray[] => {
  const matches: RegExpMatchArray[] = []
  let match: RegExpMatchArray | null

  while ((match = regExp.exec(str)) !== null) {
    matches.push(match)
  }

  return matches
}
