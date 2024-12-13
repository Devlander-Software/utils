import { toObjectSet } from './toObjectSet.js'

/**
 * Parse headers into an object
 *
 * @param rawHeaders Headers needing to be parsed
 *
 * @returns Headers parsed into an object
 */
export function parseHeaders(
  rawHeaders: string,
): Record<string, string | string[]> {
  const parsed: Record<string, string | string[]> = {}
  const ignoreDuplicateOf = toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ])
  rawHeaders?.split('\n').forEach((line) => {
    const index = line.indexOf(':')
    const key = line.substring(0, index).trim().toLowerCase()
    const value = line.substring(index + 1).trim()

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return
    }

    if (key === 'set-cookie') {
      parsed[key] = parsed[key] ? [...parsed[key], value] : [value]
    } else {
      parsed[key] = parsed[key] ? `${parsed[key]}, ${value}` : value
    }
  })

  return parsed
}
