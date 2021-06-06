const HtmlWebPlugin = require('html-webpack-plugin');
const path = require('path');
const WebpackAssetsManifest = require('webpack-assets-manifest');

const htmlPlugin = new HtmlWebPlugin({
  filename: './index.html',
  favicon: 'src/assets/img/favicon.ico',
  template: './public/index.html',
});

const webAssetManifest = new WebpackAssetsManifest({
  output: path.join(__dirname, 'dist/asset-manifest.json'),
});

module.exports = {
  entry: './src/index.jsx',
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
  stats: 'errors-only',
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
          'css-loader',
          'resolve-url-loader',
          'sass-loader',
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
};
