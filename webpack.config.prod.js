const HtmlWebPlugin = require('html-webpack-plugin');
const path = require('path');
const WebpackAssetsManifest = require('webpack-assets-manifest');

const htmlPlugin = new HtmlWebPlugin({
  filename: './index.html',
  favicon: './public/assets/favicon.ico',
  template: './public/index.html',
});

const webAssetManifest = new WebpackAssetsManifest({
  output: path.join(__dirname, 'dist/asset-manifest.json'),
});

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[id]-[chunkhash].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
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
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        include: path.resolve(__dirname, './src'),
        use: [
          'thread-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.ts$|\.tsx?$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, './src'),
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
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin, webAssetManifest],
  mode: "production",
};
