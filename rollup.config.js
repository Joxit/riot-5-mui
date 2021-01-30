import riot from 'rollup-plugin-riot';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { emptyDirectories } from 'rollup-plugin-app-utils';
import { babel } from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';

const plugins = [
  riot(),
  nodeResolve(),
  scss({ output: './build/styles/riot-mui.min.css', outputStyle: 'compressed' }),
  commonjs(),
  babel({ babelHelpers: 'bundled', presets: ['@babel/env'] }),
];

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'build/js/riot-mui-min.js',
      format: 'iife',
      globals: { 'riot': 'riot' },
    },
    external: ['riot'],
    plugins: [emptyDirectories('build')].concat(plugins, terser()),
  },
  {
    input: 'src/index.js',
    output: {
      file: 'build/js/riot-mui.js',
      format: 'iife',
      globals: { 'riot': 'riot' },
    },
    external: ['riot'],
    plugins: plugins,
  },
];
