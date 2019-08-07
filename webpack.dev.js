const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DEV_SERVER_PORT } = require('./config.json');

const BUILD_DIR = resolve(__dirname, 'extension');
const APP_DIR = resolve(__dirname, 'src');

module.exports = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'popup/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        type: 'javascript/auto',
        test: /\.(png|jpg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'popup/media/[name].[ext]',
              publicPath: '/',
            },
          },
        ],
      },
      {
        type: 'javascript/auto',
        test: /\.(txt|xml|json)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/',
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'popup/fonts/[name].[ext]',
              publicPath: '/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'popup/style.css',
    }),
    new HtmlWebpackPlugin({
      template: `${APP_DIR}/index.html`,
    }),
  ],
  devServer: {
    compress: true,
    contentBase: APP_DIR,
    port: DEV_SERVER_PORT,
  },
  mode: 'development',
};
