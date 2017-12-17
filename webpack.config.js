const webpack = require('webpack')
const path = require('path')

const config = {
  entry: './index.js',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      { test: /\.js/, use: 'babel-loader' }
    ]
  }
}

module.exports = config