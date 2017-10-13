const webpack = require('webpack');
const common = require('./common.js');
const merge = require('webpack-merge');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;

module.exports = merge(common, {
  devtool: 'inline-source-map'
});
