export const toFlatObject = (
  sourceObj: Record<string, unknown> | Error | null,
  destObj: Record<string, unknown> = {},
  filter?: (obj: Record<string, unknown>) => boolean,
  propFilter?: (prop: string, sourceObj: unknown, destObj: unknown) => boolean,
): Record<string, unknown> => {
  const merged: Record<string, boolean> = {}

  if (sourceObj == null) return destObj

  let currentObj: Record<string, unknown> | null = sourceObj as Record<
    string,
    unknown
  >

  do {
    const props = Object.getOwnPropertyNames(currentObj)

    for (let i = props.length - 1; i >= 0; i--) {
      const prop = props[i]

      if (
        (!propFilter || propFilter(prop, sourceObj, destObj)) &&
        !merged[prop]
      ) {
        destObj[prop] = currentObj[prop]
        merged[prop] = true
      }
    }

    currentObj = Object.getPrototypeOf(currentObj) as Record<
      string,
      unknown
    > | null
  } while (
    currentObj &&
    (!filter || filter(currentObj)) &&
    currentObj !== Object.prototype
  )

  return destObj
}
