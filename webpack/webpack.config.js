const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const rules = require('./rules');
const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');
console.log(`--${NODE_ENV}`);
module.exports = {
  entry: {
    'index': './src/main.js'
  },
  output: {
    path:  './bundle',
    publicPath: '/',
    filename: '[name].js'
  },
  devtool: 'cheap-inline-module-source-maps',
  watch: NODE_ENV === 'watch',
  watchOptions: {
    aggregateTimeout: 100
  },
  module: {
    rules: rules
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({filename: '[name].css', allChunks: true, disable: NODE_ENV === 'watch'}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    },
    extensions: ['.js']
  },
  devServer: {
    historyApiFallback: true,
    port: 4000,
    contentBase: './bundle',
    inline: true,
    hot: false
  }
};