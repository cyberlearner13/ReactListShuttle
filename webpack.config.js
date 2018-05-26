const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.bundle.js'
    },
    module: {
        rules: [
          { test: /\.css$/, use: 'css-loader' },
          { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
        ]
      },
      devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        port: 9000
      },
      plugins: [
        new CleanWebpackPlugin(['dist']),
        htmlPlugin,
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
      ],
  }


