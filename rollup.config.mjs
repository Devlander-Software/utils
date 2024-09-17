import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import fs from "fs";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import nodePolyfills from "rollup-plugin-polyfill-node";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts"; // Added for TypeScript declaration files

const treeshake = {
  moduleSideEffects: false,
  propertyReadSideEffects: false,
  tryCatchDeoptimization: false,
};

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

const extensions = [".js", ".ts"];

const output = [
  {
    file: packageJson.browser,
    format: "umd",
    name: "DevlanderUtils", // Replace with your package's name
    sourcemap: true,
  },
  {
    file: packageJson.main,
    format: "cjs",
    sourcemap: true,
  },
  {
    file: packageJson.module,
    format: "esm",
    sourcemap: true,
  }
];

const externals = [];
const makeExternalPredicate = (externalArr) => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
  return (id) => pattern.test(id);
};

export default [
  {
    input: "src/index.ts", // Entry point
    output: output,
    external: makeExternalPredicate(externals),
    plugins: [
      peerDepsExternal(),
      nodeResolve({
        extensions,
        preferBuiltins: true,
        mainFields: ['module', 'main', 'browser'],
      }),
      commonjs({
        include: /node_modules/,
        extensions,
      }),
      typescript(), // Transpile TypeScript files
      babel({
        extensions,
        babelHelpers: "bundled",
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript", // No React preset since it's not needed
        ],
      }),
      nodePolyfills(), // Keep this if you need Node.js core modules in the browser
      json(),
      terser(), // Minification plugin
    ],
    treeshake: treeshake,
  },
  {
    input: "src/index.ts", // Input file for TypeScript types
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: makeExternalPredicate(externals),
  }
];
