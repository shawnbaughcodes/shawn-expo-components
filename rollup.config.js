/* eslint-disable flowtype/require-valid-file-annotation, no-console, import/extensions */
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
// import sourceMaps from 'rollup-plugin-sourcemaps';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

const myConfig = {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-native': 'reactNative',
      },
    },
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  types: 'index.d.ts',
  plugins: [
    commonjs({
      namedExports: {
        'react-native': ['View', 'Dimensions', 'TouchableOpacity'],
      },
    }),
    nodeResolve({
      browser: true,
      jsnext: true,
      'react-app': true,
    }),
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
};

export default [myConfig];
