const HtmlWebPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  path = require('path');

const htmlPlugin = new HtmlWebPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const extractPlugin = new ExtractTextPlugin('style.css');

module.exports = {
  entry: './src/index.jsx',
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    alias: {
      styles: path.resolve(__dirname, './src/styles')
    }
  },
  stats: "errors-only",
  module: {
    rules: [{
      test: /\.js$|\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader!sass-loader"
      })
    }]
  },
  devServer: {
    historyApiFallback: true,
    port: 1234
  },
  plugins: [
    htmlPlugin,
    extractPlugin
  ]
}