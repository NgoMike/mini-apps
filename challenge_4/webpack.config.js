var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: './src/client/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders : [
      {
        test : /\.jsx?$/,
        include : path.resolve(__dirname, './src/client/app.jsx'),
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;