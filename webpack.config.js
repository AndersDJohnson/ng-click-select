'use strict';

const path = require('path');
const webpack = require('webpack');

const rootDir = path.resolve(__dirname);

module.exports = {
  entry: {
    example: [ path.resolve(rootDir, 'example', 'example') ],
    // vendor: [ path.resolve(rootDir, 'example', 'vendor') ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(rootDir, 'example')
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { loader: 'raw', test: /\.(css|html)$/ },
      { exclude: /node_modules/, loader: 'ts-loader', test: /\.ts$/ }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts'],
    modulesDirectories: ['node_modules'],
    // root: path.resolve('.', '')
  },
};
