# Utils Package Guidelines

## 🎯 Purpose
The `@devlander/utils` package is a **generic, reusable utility library** that provides common JavaScript/TypeScript functions that can be used across any project. It should be completely framework-agnostic and business-logic-free.

## ✅ What Belongs in Utils Package

### Data Manipulation
- **Array operations**: `deduplicate`, `getUniqueObjects`, `getRandomValFromArray`
- **Object operations**: `extractKeysAndValues`, `mergeObjects`, `toFlatObject`
- **String operations**: `dashToCamelCase`, `toCamelCase`, `removeSpacesFromString`
- **Type checking**: `isString`, `isNumber`, `isObject`, `isArray`, `isEmpty`
- **Data conversion**: `toQueryString`, `parseQueryString`, `formDataToJson`

### Mathematical & Statistical
- **Calculations**: `calculatePercentage`, `getAverage`, `getRange`
- **Number formatting**: `abbreviateNumber`, `formatRangeOrPercentage`
- **Validation**: `isNumeric`, `isValidBinary`

### Utility Functions
- **General helpers**: `endsWith`, `findKey`, `forEach`, `forEachEntry`
- **File operations**: `convertBlobToBase64`, `isValidBlob`
- **Time operations**: `convertVideoTimeStampToSeconds`, `getDayOfYearFromDate`
- **CSS/Style**: `ensureValidStyle`, `isValidStyle`, `safeCssProperties`

### Development Tools
- **Logging**: `logStart`, `logEnd`, `logFunction`, `logSeparator`
- **Debugging**: `createTransitionalMessage`, `typeToTest`
- **Testing helpers**: `waitFor`, `wrapFunctionWithOptionalArgs`

### Generic Enums & Types
- **Common enums**: `DeduplicateInputType`, `RangeOrAmountEnum`, `PercentagePrefixEnum`
- **Generic interfaces**: `AnyObject`, `MergedValue`, `AssignValueCallback`

## ❌ What Does NOT Belong in Utils Package

### Business Logic
- ❌ User authentication/authorization
- ❌ Feature flags or permissions
- ❌ Domain-specific validation
- ❌ API endpoint definitions
- ❌ Database operations

### Framework-Specific Code
- ❌ React/React Native components
- ❌ Express middleware
- ❌ Framework-specific hooks
- ❌ Platform-specific implementations

### Application-Specific Features
- ❌ App specific functions
- ❌ Video processing logic
- ❌ User management functions
- ❌ Payment processing
- ❌ Content management

### External Dependencies
- ❌ Heavy external libraries
- ❌ Framework dependencies
- ❌ Database drivers
- ❌ Authentication providers

## 🔧 Development Principles

### 1. **Generic & Reusable**
Every function should be usable in any JavaScript/TypeScript project:
```typescript
// ✅ GOOD - Generic utility
export const formatCurrency = (amount: number, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount);
};

// ❌ BAD - Business specific
export const processVideoUpload = (videoFile: File, userId: string) => {
  // Raw Outdoors specific logic
};
```

### 2. **Pure Functions**
Functions should be pure and predictable:
```typescript
// ✅ GOOD - Pure function
export const add = (a: number, b: number): number => a + b;

// ❌ BAD - Side effects
export const logAndProcess = (data: any) => {
  console.log(data); // Side effect
  return processData(data);
};
```

### 3. **Type Safety**
All functions should have proper TypeScript types:
```typescript
// ✅ GOOD - Well typed
export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

// ❌ BAD - No types
export const processData = (data) => {
  return data.map(item => item.value);
};
```

### 4. **Comprehensive Testing**
Every function must have unit tests:
```typescript
// ✅ GOOD - Tested function
export const toQueryString = (query?: Record<string, any>): string => {
  // Implementation
};

// Test file: toQueryString.test.ts
describe('toQueryString', () => {
  test('should handle empty object', () => {
    expect(toQueryString({})).toBe('');
  });
  
  test('should handle simple key-value pairs', () => {
    expect(toQueryString({ name: 'John', age: 30 }))
      .toBe('?name=John&age=30');
  });
});
```

### 5. **Documentation**
Every function must have JSDoc documentation:
```typescript
/**
 * Converts an object of query parameters into a URL-encoded query string.
 * 
 * @param query - An optional object containing key-value pairs for query parameters.
 * @returns A string representing the query parameters in URL-encoded format.
 * 
 * @example
 * ```typescript
 * toQueryString({ name: "John", age: 30 });
 * // Returns: "?name=John&age=30"
 * ```
 */
export const toQueryString = (query?: Record<string, any>): string => {
  // Implementation
};
```

## 📁 File Organization

### Source Structure
```
src/
├── __tests__/           # Test files
├── types/              # TypeScript type definitions
├── convert-blob-to-base64/  # Feature-specific folders
├── index.ts            # Main export file
└── [function].ts       # Individual utility functions
```

### Naming Conventions
- **Files**: `camelCase.ts` (e.g., `toQueryString.ts`)
- **Functions**: `camelCase` (e.g., `toQueryString`)
- **Types**: `PascalCase` (e.g., `QueryStringOptions`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `DEFAULT_OPTIONS`)

## 🚀 Adding New Functions

### Before Adding
1. **Ask yourself**: "Could this function be used in any JavaScript project?"
2. **Check existing**: Is there already a similar function?
3. **Consider scope**: Is this too specific to one use case?

### Adding Process
1. Create the function with proper TypeScript types
2. Add comprehensive JSDoc documentation
3. Write unit tests with edge cases
4. Update the main `index.ts` export
5. Update this documentation if needed

### Example Addition
```typescript
// src/debounce.ts
/**
 * Creates a debounced function that delays invoking the provided function
 * until after the specified wait time has elapsed since the last time it was invoked.
 * 
 * @param func - The function to debounce
 * @param wait - The number of milliseconds to delay
 * @returns A debounced version of the function
 * 
 * @example
 * ```typescript
 * const debouncedSearch = debounce(searchFunction, 300);
 * debouncedSearch('query'); // Will only execute after 300ms of no calls
 * ```
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
```

## 🔄 Maintenance

### Regular Reviews
- **Monthly**: Review for unused functions
- **Quarterly**: Check for breaking changes
- **Annually**: Major version updates

### Version Management
- **Patch**: Bug fixes and documentation updates
- **Minor**: New functions (backwards compatible)
- **Major**: Breaking changes

### Breaking Changes
- Must be documented in CHANGELOG.md
- Should be avoided when possible
- Require major version bump
- Must provide migration guide

## 📚 Resources

### Related Documentation
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [JSDoc Reference](https://jsdoc.app/)
- [Jest Testing Framework](https://jestjs.io/docs/getting-started)

### Internal References
- `CHANGELOG.md` - Version history and changes
- `README.md` - Package overview and installation
- `TESTING.md` - Testing guidelines and examples

---

**Remember**: The utils package is the foundation that other packages depend on. Keep it clean, generic, and well-tested! 