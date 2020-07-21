/* eslint-disable flowtype/require-valid-file-annotation, no-console, import/extensions */
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import sourceMaps from 'rollup-plugin-sourcemaps';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

// const propTypeIgnore = { "import PropTypes from 'prop-types';": "'';" };

// const cjs = {
//   exports: 'named',
//   format: 'cjs',
//   //   sourcemap: true,
// };

// const esm = {
//   format: 'esm',
//   //   sourcemap: true,
// };

// const getCJS = (override) => ({ ...cjs, ...override });
// const getESM = (override) => ({ ...esm, ...override });

// const commonPlugins = [
//   sourceMaps(),
//   json(),
//   nodeResolve({
//     browser: true,
//   }),
//   babel({
//     babelrc: false,
//     exclude: 'node_modules/**',
//     presets: [['@babel/env', { loose: true, modules: false }], '@babel/react'],
//     plugins: ['@babel/plugin-proposal-class-properties'],
//     extensions: ['.js', '.jsx', '.ts', '.tsx'],
//   }),
//   commonjs({
//     namedExports: {
//       'react-native': ['View', 'Dimensions', 'TouchableOpacity'],
//       'react-is': ['isElement', 'isValidElementType', 'ForwardRef'],
//     },
//     sourceMap: true,
//   }),
//   replace({
//     __VERSION__: JSON.stringify(pkg.version),
//   }),
//   typescript({ useTsconfigDeclarationDir: true }),
// ];

// const prodPlugins = [
//   replace({
//     ...propTypeIgnore,
//     'process.env.NODE_ENV': JSON.stringify('production'),
//   }),
//   //   terser({
//   //     sourcemap: true,
//   //   }),
// ];

// const configBase = {
//   input: './src/index.js',
//   extensions: ['.js', '.jsx', '.ts', '.tsx'],
//   // \0 is rollup convention for generated in memory modules
//   external: (id) =>
//     !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/'),
//   plugins: commonPlugins,
// };

// const globals = {
//   react: 'React',
//   'react-native': 'reactNative',
//   'd3-scale': 'd3Scale',
//   'd3-array': 'd3Array',
//   lodash: '_',
// };

// const standaloneBaseConfig = {
//   ...configBase,
//   input: './src/index.js',
//   output: {
//     file: 'dist/react-native-soundcloud-waveform.js',
//     format: 'umd',
//     globals,
//     name: 'soundcloud',
//     sourcemap: true,
//   },
//   plugins: configBase.plugins.concat(
//     replace({
//       __SERVER__: JSON.stringify(false),
//     })
//   ),
// };

// const standaloneConfig = {
//   ...standaloneBaseConfig,
//   plugins: standaloneBaseConfig.plugins.concat(
//     replace({
//       'process.env.NODE_ENV': JSON.stringify('development'),
//     })
//   ),
// };

// const standaloneProdConfig = {
//   ...standaloneBaseConfig,
//   output: {
//     ...standaloneBaseConfig.output,
//     file: 'dist/react-native-soundcloud-waveform.min.js',
//   },
//   plugins: standaloneBaseConfig.plugins.concat(prodPlugins),
// };

// const nativeConfig = {
//   ...configBase,
//   input: 'src/index.js',
//   output: [
//     getCJS({
//       file: 'dist/react-native-soundcloud-waveform.cjs.js',
//     }),
//     getESM({
//       file: 'dist/react-native-soundcloud-waveform.esm.js',
//     }),
//   ],
// };

const myConfig = {
  input: 'src/index.ts',
  output: [
    {
      dir: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  types: 'dist/index.d.ts',
  plugins: [
    commonjs(),
    nodeResolve(),
    peerDepsExternal(),
    typescript({
      typescript: require('typescript'),
      useTsconfigDeclarationDir: true,
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        ['@babel/env', { loose: true, modules: false }],
        '@babel/react',
      ],
      plugins: ['@babel/plugin-proposal-class-properties'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
  ],
  //   preserveModules: true,
};

// export default [standaloneConfig, standaloneProdConfig, nativeConfig];
export default [myConfig];
