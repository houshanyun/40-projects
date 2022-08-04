const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[hash].js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/, 
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          },
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {test: /\.ts$/, use: 'ts-loader'},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './base.html'}),
    new MiniCssExtractPlugin({filename: 'index.[hash].css'}),
    new CleanWebpackPlugin(),
  ],
}
