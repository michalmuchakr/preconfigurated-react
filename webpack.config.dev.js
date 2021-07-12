const HtmlWebPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPlugin({
  filename: './index.html',
  favicon: 'src/assets/img/favicon.ico',
  template: './public/index.html',
});

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    pathinfo: false,
  },
  optimization: {
    runtimeChunk: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    alias: {
      styles: path.resolve(__dirname, './src/styles'),
      fonts: path.resolve(__dirname, './src/assets/fonts'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  stats: 'errors-only',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.ts$|\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        loader: 'css-loader',
        options: {
          url: true,
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img/',
            },
          },
        ],
      },
    ],
  },
  mode: 'development',
  devServer: {
    compress: false,
    historyApiFallback: true,
    open: true,
    port: 1234,
    hot: true,
    watchContentBase: true,
  },
  plugins: [htmlPlugin],
};
