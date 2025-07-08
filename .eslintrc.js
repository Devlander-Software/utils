/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path")

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'jest',
    'testing-library',
    'prettier',
    'unused-imports',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: path.join(__dirname, 'tsconfig.eslint.json'),
  },
  ignorePatterns: [
    "*.d.ts",
    'package-type-helper.cjs',
    "package-type-helper.js",
    "rollup-config/*/**",
    "rollup-config/rollup-config.ts",
    "rollup.config.mjs",
    "__tests__",
    "examples/**",
    "test/**",
  ],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        singleQuote: true,
      },
      {
        usePrettierrc: false,
      },
    ],
    // Rest of the rules...
  },
  globals: {
    SwaggerEditor: true,
  },
}
