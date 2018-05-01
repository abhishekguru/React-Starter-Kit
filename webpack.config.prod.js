'use strict';
const path = require('path'),
      webpack = require('webpack');
require('babel-polyfill');
module.exports = {
    entry:'./source/index.js',
    output:{
        filename:'./public/bundle.js'
    },
    module: {
        loaders: [
          {
            test: /\.css$/,
            loader: "style-loader!css-loader"
          },{
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