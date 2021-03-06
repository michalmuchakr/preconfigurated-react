const HtmlWebPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPlugin({
  filename: './index.html',
  favicon: './public/assets/favicon.ico',
  template: './public/index.html',
});

module.exports = {
  entry: './src/index.tsx',
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
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
        use: [
          'thread-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.ts$|\.tsx?$/,
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
        use: 'ts-loader',
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
        include: path.resolve(__dirname, './src/styles'),
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/i,
        include: path.resolve(__dirname, './src/assets/'),
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
        include: path.resolve(__dirname, './src/assets/'),
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
