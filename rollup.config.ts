import type { RollupOptions } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import babel, { getBabelOutputPlugin } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import html from "@rollup/plugin-html";

const config = [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist/es",
        format: "esm",
        preserveModules: true,
      },
      {
        dir: "dist/lib",
        format: "cjs",
        preserveModules: true,
      },
    ],
    plugins: [resolve(), commonjs(), typescript()],
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/bundle.min.js",
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
      // html(),
    ],
  },
  {
    input: "src/index.ts",
    output: [
      { file: "dist/es/index.d.ts", format: "es" },
      { file: "dist/lib/index.d.ts", format: "cjs" },
    ],
    plugins: [dts()],
  },
];
export default config;
