const { merge } = require('webpack-merge');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: 'js/[name].js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      emitWarning: true,
      failOnError: false,
    }),
  ],
});


