import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import fs from "fs";
import { terser } from "rollup-plugin-terser";

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

const extensions = [".js",  ".ts"];


const globals = {
}

const external = []
const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
  return id => pattern.test(id);
};


export default {
  input: "src/index.ts", // Your entry point
  output: [
 
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
  ],

  external: makeExternalPredicate(external),
  plugins: [

    nodeResolve({
      extensions,
      preferBuiltins: true,
    }),
    commonjs({
      include: /node_modules/,
      extensions,
    }),
    babel({
      extensions,
      babelHelpers: "bundled",
      exclude: /node_modules/,
      presets: [
        "@babel/preset-env",
        "@babel/preset-typescript",
      ],
    }),
    typescript(),
    json(),
    terser(), // Use terser for minification
  ],
};
