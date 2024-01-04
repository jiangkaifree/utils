import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import ts from '@rollup/plugin-typescript';

import { defineConfig } from 'rollup';

const TerserOptions = {
  maxWorkers: 4,
  compress: {
    dead_code: true,
    drop_console: true
  }
}

export default defineConfig([
    // build npm
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'umd',
      name: 'Ukey',
      plugins: [terser(TerserOptions), commonjs()],
    },
    plugins: [ts()],
  },
    // build a js file
  // {
  //   input: 'src/index.ts',
  //   output: [
  //     { file: 'utils.js', format: 'cjs', plugins: [terser(TerserOptions), commonjs()] },
  //   ],
  //   plugins: [ts()],
  // },
]);
