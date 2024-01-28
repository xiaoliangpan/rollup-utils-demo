import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";

const config = defineConfig([
  {
    input: "src/main.ts",
    output: [
      {
        dir: "dist/es",
        format: "es",
        preserveModules: true,
      },
      {
        dir: "dist/lib/",
        format: "cjs",
        preserveModules: true,
      },
    ],
    plugins: [resolve(), commonjs(), typescript()],
  },
  {
    input: "src/main.ts",
    output: [
      {
        file: "dist/index.min.js",
        format: "umd",
        name: "utils",
      },
    ],

    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      babel({
        babelHelpers: "runtime", // 使用 bundled runtime helper 减小输出体积
        exclude: "node_modules/**", // 排除 node_modules 下的文件
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      terser(),
    ],
  },
  {
    input: "src/main.ts",
    output: [
      { file: "dist/es/index.d.ts", format: "es" },
      { file: "dist/lib/index.d.ts", format: "cjs" },
      { file: "dist/index.d.ts", format: "umd" },
    ],
    plugins: [dts()],
  },
]);
export default config;
