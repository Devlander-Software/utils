// import babel from "@rollup/plugin-babel";
import babel from "@rollup/plugin-babel"; // Keeping babel for transpilation of modern JS/TS to older environments

// import commonjs from "@rollup/plugin-commonjs";
import commonjs from "@rollup/plugin-commonjs"; // Still required to convert CommonJS modules to ES6 for compatibility

// import json from "@rollup/plugin-json";
import json from "@rollup/plugin-json"; // Keep json plugin to handle importing JSON files as modules

// import { nodeResolve } from "@rollup/plugin-node-resolve";
import { nodeResolve } from "@rollup/plugin-node-resolve"; // Keep nodeResolve to handle module resolution, especially for external dependencies

// import typescript from "@rollup/plugin-typescript";
import typescript from "@rollup/plugin-typescript"; // Typescript plugin needed to compile TypeScript files into JavaScript

// import fs from "fs";
import fs from "fs"; // `fs` is necessary to read the package.json file to get output file paths

// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import peerDepsExternal from 'rollup-plugin-peer-deps-external'; // Keep peerDepsExternal to automatically externalize peer dependencies, reducing bundle size

// import nodePolyfills from "rollup-plugin-polyfill-node";
import nodePolyfills from "rollup-plugin-polyfill-node"; // Retain nodePolyfills only if Node.js core modules need to be used in the browser

// import { terser } from "rollup-plugin-terser";
import { terser } from "rollup-plugin-terser"; // Keep terser to minify the bundle for production environments


// const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8")); // No change here, still need to parse package.json to get output paths

// const extensions = [".js",  ".ts"];
const extensions = [".js", ".ts"]; // No change, these are the file extensions to resolve


// const globals = {}
const globals = {}; // Keeping globals configuration, empty since it's likely your package doesn’t rely on globals


// const externals = [];
const externals = []; // Defining externals array, although simplified in the new external predicate function


// const makeExternalPredicate = externalArr => {
//   if (externalArr.length === 0) {
//     return () => false;
//   }
//   const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
//   return id => pattern.test(id);
// };
const external = (id) => !id.startsWith('.') && !id.startsWith('/'); 
// Simplified external handling; this checks if a module is not relative or absolute, and treats it as external, ensuring proper dependency management


// const output =   [
//   {
//     file: packageJson.browser,
//     format: "umd",
//     name: "DevlanderUtils",
//     globals: globals,
//     sourcemap: true,
//   },
//   {
//     file: packageJson.main,
//     format: "cjs",
//     globals: globals,
//     sourcemap: true,
//   },
//   {
//     file: packageJson.module,
//     format: "esm",
//     globals: globals,
//     sourcemap: true,
//   }
// ];
const output = [
  {
    file: packageJson.browser,
    format: "umd",
    name: "DevlanderUtils",
    sourcemap: true, // Output in UMD format for browser usage, with sourcemaps
  },
  {
    file: packageJson.main,
    format: "cjs",
    sourcemap: true, // Output in CommonJS format for Node.js environments, with sourcemaps
  },
  {
    file: packageJson.module,
    format: "esm",
    sourcemap: true, // Output in ESM format for modern JavaScript bundlers, with sourcemaps
  }
];
// Output configuration remains mostly the same, producing UMD, CJS, and ESM builds with sourcemaps


// export default {
//   plugins: [

//     peerDepsExternal( ),
//     nodeResolve({
//       extensions,
//       preferBuiltins: true,
//       mainFields: ['module', 'main', 'browser'],
//     }),
//     commonjs({
//       include: /node_modules/,
//       extensions,
//     }),
//     babel({
//       extensions,
//       babelHelpers: "bundled",
//       presets: [
//         "@babel/preset-env",
//         "@babel/preset-typescript",
//       ],
//     }),
//     typescript(),
//     nodePolyfills(),
//     json(),
//     terser(),  
//   ],

//   input: "src/index.ts", // Entry point, exclude storybook entry point if it's different
//   external: makeExternalPredicate(externals),
//   output: output
// };
export default {
  input: "src/index.ts", // Set the entry point to your TypeScript source
  external, // Simplified external declaration to exclude non-relative and non-absolute modules
  plugins: [
    peerDepsExternal(), // Automatically externalize peer dependencies
    nodeResolve({
      extensions,
      preferBuiltins: true, // Prefer Node.js built-in modules if available
      mainFields: ['module', 'main', 'browser'], // Ensure proper resolution for Node.js, browser, and ESM environments
    }),
    commonjs({
      include: /node_modules/, // Convert CommonJS modules from node_modules
      extensions,
    }),
    babel({
      extensions,
      babelHelpers: "bundled", // Bundle Babel helpers to avoid requiring external dependencies
      presets: [
        "@babel/preset-env", // Transpile modern JS syntax
        "@babel/preset-typescript", // Handle TypeScript files
      ],
    }),
    typescript(), // Compile TypeScript files
    nodePolyfills(), // Include Node.js polyfills for browser compatibility
    json(), // Support importing JSON files
    terser(), // Minify the final output
  ],
  output, // Use the defined output configuration
};
