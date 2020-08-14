const HtmlWebPlugin = require("html-webpack-plugin"),
  path = require("path");

const htmlPlugin = new HtmlWebPlugin({
  filename: "./index.html",
  favicon: "src/assets/img/favicon.ico",
  template: "./public/index.html"
});

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "main.js",
    path: path.resolve("dist"),
    publicPath: "/"
  },
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    alias: {
      styles: path.resolve(__dirname, "./src/styles")
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  stats: "errors-only",
  module: {
    rules: [{
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [{
          loader: "file-loader"
        }]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 1234,
    hot: true
  },
  plugins: [htmlPlugin]
};