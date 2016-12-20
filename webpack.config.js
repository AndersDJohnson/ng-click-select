'use strict';

module.exports = {
  entry: {
    example: './example/example.ts'
  },
  output: {
    filename: '[name].bundle.js',
    path: './example'
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
    modulesDirectories: ['node_modules']
  },
};
