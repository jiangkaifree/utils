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
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'umd',
      name: 'utils',
      plugins: [terser(TerserOptions), commonjs()],
    },
    plugins: [ts()],
  },
]);
