// import babel from "@rollup/plugin-babel";
// import commonjs from "@rollup/plugin-commonjs";
// import json from "@rollup/plugin-json";
// import nodeResolve from "@rollup/plugin-node-resolve";
// import typescript from "@rollup/plugin-typescript";
// import fs from "fs";

import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import fs from "fs";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import nodePolyfills from "rollup-plugin-polyfill-node";
import { terser } from "rollup-plugin-terser";


const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

const extensions = [".js",  ".ts"];


const globals = {
}

const externals = []
const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
  return id => pattern.test(id);
};


const output =   [
  {
    file: packageJson.browser,
    format: "umd",
    name: "DevlanderUtils",
    globals: globals,
    sourcemap: true,
  },
  {
    file: packageJson.main,
    format: "cjs",
    globals: globals,
    sourcemap: true,
  },
  {
    file: packageJson.module,
    format: "esm",
    globals: globals,

    sourcemap: true,
  }
]






export default {
  plugins: [

      
    peerDepsExternal( ),
    nodeResolve({
      extensions,
      preferBuiltins: true,
      mainFields: ['module', 'main', 'browser'],

    }),
    commonjs({
      include: /node_modules/,
      extensions,
    }),
    babel({
      extensions,
      babelHelpers: "bundled",
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
    }),
    typescript(),
    nodePolyfills(),
    json(),
    terser(),
  
  
  ],

  input: "src/index.ts", // Entry point, exclude storybook entry point if it's different
  external: makeExternalPredicate(externals),
  output: output
};
