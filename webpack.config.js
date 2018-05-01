'use strict'
let port = 6060;
var path = require('path');
let webpack = require('webpack');
module.exports = {
  entry: './source/index.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: port,
    contentBase: './public',
    historyApiFallback: true,
    disableHostCheck: true,
    host: "0.0.0.0",
    disableHostCheck: true
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
