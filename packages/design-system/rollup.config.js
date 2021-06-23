import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import ts from '@rollup/plugin-typescript';

import pkg from './package.json';

const peerDeps = Object.keys(pkg.peerDependencies || {});
const environment = process.env.NODE_ENV;

const isDevelopment = environment === 'development';

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

const extensions = ['.tsx', '.ts'];
const plugins = {
  plugins: [
    del({ targets: 'dist/*', runOnce: true }),
    json(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      extensions,
      babelHelpers: 'runtime',
      presets: [
        [
          'next/babel',
          {
            'preset-react': {
              runtime: 'automatic',
              importSource: '@emotion/react',
            },
          },
        ],
      ],
      plugins: ['@emotion'],
    }),
    ts(),
    resolve({ extensions }),
  ],
};

export default {
  input: {
    Button: './src/Button',
    Input: './src/Input'
  },
  external: peerDeps,
  watch: {
    clearScreen: true,
    include: ['./src/**'],
  },
  ...plugins,
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: isDevelopment,
      globals,
    },
  ],
};
