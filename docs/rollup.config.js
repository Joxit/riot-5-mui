import riot from 'rollup-plugin-riot';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { emptyDirectories } from 'rollup-plugin-app-utils';
import { babel } from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import serve from 'rollup-plugin-serve';
import fs from 'fs';
import injectSnippet from './rollup/inject-snippet.js';
import injectIds from './rollup/inject-ids.js';

const useServe = process.env.ROLLUP_SERVE === 'true';
const port = process.env.ROLLUP_PORT || 8000;
const output = useServe ? '.serve' : 'build';

let plugins = [
  emptyDirectories(output),
  injectSnippet(),
  injectIds(),
  riot(),
  nodeResolve(),
  scss({ fileName: `riot-mui-documentation.css`, outputStyle: 'compressed' }),
  commonjs(),
  babel({ babelHelpers: 'bundled', presets: [['@babel/env', { useBuiltIns: 'usage', corejs: { version: '2' } }]] }),
];

if (useServe) {
  plugins[serve({ host: 'localhost', port, contentBase: [output, './'] })];
} else {
  plugins.push(terser());
}

plugins.push({
  name: 'html',
  generateBundle: () => {
    console.log(`Move index.html to ${output}/index.html`);
    const html = fs.readFileSync('index.html', 'utf-8');
    fs.writeFileSync(`${output}/index.html`, html);
  },
});

export default [
  {
    input: 'src/index.js',
    output: {
      file: `${output}/riot-mui-documentation.js`,
      format: 'iife',
    },
    watch: ['src/**', '../src/**', './rollup/**'],
    plugins: plugins,
  },
];
