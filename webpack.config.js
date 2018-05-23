const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

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
          { test: /\.js$/, use: 'babel-loader' }
        ]
      },
      plugins: [htmlPlugin]
  }


