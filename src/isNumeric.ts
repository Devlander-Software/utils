export const isNumeric = (n: unknown): boolean => {
  return (
    typeof n === 'number' ||
    (typeof n === 'string' && !isNaN(parseFloat(n)) && isFinite(parseFloat(n)))
  )
}
