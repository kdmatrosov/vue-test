const ExtractTextPlugin = require("extract-text-webpack-plugin");
const resolve = require('./resolve');
module.exports = [
  {
    test: /\.vue$/,
    loader: 'vue-loader'
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [resolve('src'), resolve('test')]
  },
  {
    test: /\.html$/,
    loader: 'html-loader'
  }
];