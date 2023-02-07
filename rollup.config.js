import riot from 'rollup-plugin-riot';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { emptyDirectories } from 'rollup-plugin-app-utils';
import { babel } from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import serve from 'rollup-plugin-serve';
import fs from 'fs';

const useServe = process.env.ROLLUP_SERVE === 'true';
const cleanup = process.env.ROLLUP_CLEANUP === 'true';
const port = process.env.ROLLUP_PORT || 8000;
const output = useServe ? '.serve' : 'build';

const plugins = [
  riot(),
  nodeResolve(),
  scss({ fileName: `riot-mui.min.css`, outputStyle: 'compressed' }),
  commonjs(),
  babel({ babelHelpers: 'bundled', presets: ['@babel/env'] }),
];

if (useServe) {
  plugins.push(serve({ host: 'localhost', port: port, contentBase: [output, './'] }));
  plugins.push({
    name: 'html',
    generateBundle: () => {
      console.log(`Move examples/vanilla/* to ${output}/*`);
      const html = fs
        .readFileSync('examples/vanilla/index.html', 'utf-8')
        .replace('../../build/js/riot-mui.js', './js/riot-mui.js')
        .replace('../../build/styles/riot-mui.min.css', './styles/riot-mui.min.css');
      fs.writeFileSync(`${output}/index.html`, html);
      fs.writeFileSync(`${output}/demo.riot`, fs.readFileSync('examples/vanilla/demo.riot', 'utf-8'));
    },
  });
}

export default [
  {
    input: 'src/bundle.js',
    output: {
      file: `${output}/js/riot-mui-min.js`,
      format: 'iife',
      globals: { 'riot': 'riot' },
    },
    external: ['riot'],
    plugins: (cleanup ? [emptyDirectories(output)] : []).concat(plugins, terser()),
  },
  {
    input: 'src/bundle.js',
    output: {
      file: `${output}/js/riot-mui.js`,
      format: 'iife',
      globals: { 'riot': 'riot' },
    },
    external: ['riot'],
    plugins: plugins,
  },
];
