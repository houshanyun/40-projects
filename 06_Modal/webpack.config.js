const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      serveIndex: true,
    },
    port: 3000,
    open: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/, 
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          'ts-loader',
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '...']
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/base.html'}),
    new MiniCssExtractPlugin({filename: 'index.css'}),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ],
}
