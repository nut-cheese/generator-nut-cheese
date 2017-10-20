const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../src/index.jsx'),
    ],
    vender: [
      'react'
    ]
  },
  output: {
    filename: 'bundle.[hash].js',
    path: path.join(__dirname, "../dist"),
    publicPath: '/',
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, '../src'),
    ],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:5]',
            }
          },
          'postcss-loader',
          'sass-loader',
        ]
      })
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          'css-loader',
          'postcss-loader'
        ]
      })
    }, {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vender',
      filename: '[name].bundle.js'
    }),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../template/index.html'),
      hash: true,
    }),
  ],
  devServer: {
    hot: true,
    port: 7801,
    historyApiFallback: true,
  },
  devtool: 'source-map',
};