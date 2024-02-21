import { safeCssProperties } from './safeCssProperties'

/**
 * Checks if a CSS string contains valid style declarations.
 *
 * @param cssString - The CSS string to validate.
 * @param validProperties - An optional array of additional valid CSS properties.
 * @returns A boolean indicating whether the CSS string is valid.
 */
export const isValidStyle = (
  cssString: string,
  validProperties?: string[],
): boolean => {
  // Combine safeCssProperties with any additional valid properties provided
  const combinedProperties = [...safeCssProperties, ...(validProperties || [])]
  const cssProperties: Set<string> = new Set(
    combinedProperties.map((prop) =>
      // Assuming safeCssProperties are in camelCase, convert them back to kebab-case for comparison
      prop.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
    ),
  )

  cssString = cssString.trim()
  if (!cssString) return false // Early return for an empty string

  // Splitting CSS string into declarations
  const declarations = cssString.split(';').filter((decl) => decl.trim())

  // Ensuring CSS string ends with a semicolon
  if (cssString && !cssString.endsWith(';')) return false

  for (const decl of declarations) {
    const parts = decl.split(':').map((part) => part.trim())
    if (parts.length !== 2) return false // Incorrect syntax

    const [property, value] = parts
    // Check if the property is valid and the value is not empty
    if (!cssProperties.has(property) || !value) return false // Invalid property or value
  }

  return true // All declarations are valid
}
