const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const sveltePreprocess = require('svelte-preprocess');

const isDevMode = process.env.NODE_ENV === 'development';

require('dotenv').config({ path: './.env' });

module.exports = {
  entry: './src/main.ts',
  output: {
    path: process.env.BUILD_PATH || path.resolve(__dirname, './build'),
    filename: 'main.js',
    libraryTarget: 'commonjs',
  },
  target: 'node',
  mode: isDevMode ? 'development' : 'production',
  ...(isDevMode ? { devtool: 'eval' } : {}),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.(svelte)$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'svelte-loader',
            options: {
              preprocess: sveltePreprocess({}),
            },
          },
        ],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'manifest.json', to: '.' },
        { from: 'assets', to: 'assets' },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
      '~': path.resolve(__dirname, 'src'),
      src: path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  externals: {
    electron: 'commonjs2 electron',
    obsidian: 'commonjs2 obsidian',
  },
};
