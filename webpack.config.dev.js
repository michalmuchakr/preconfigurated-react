const HtmlWebPlugin = require('html-webpack-plugin');
const path = require('path');
const WebpackAssetsManifest = require('webpack-assets-manifest');

const htmlPlugin = new HtmlWebPlugin({
  filename: './index.html',
  favicon: 'src/assets/img/favicon.ico',
  template: './public/index.html',
});

const webAssetManifest = new WebpackAssetsManifest({
  output: path.join(__dirname, 'dist/aset-manifest.json'),
  transform(assets, manifest) {
    return {
      files: assets,
    };
  },
});

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: '[name]-[hash].js',
    chunkFilename: '[id]-[chunkhash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'runtime-manifest',
    },
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    alias: {
      styles: path.resolve(__dirname, './src/styles'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  stats: 'errors-only',
  module: {
    rules: [{
      test: /\.js$|\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.scss$/,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
      ],
    },
    {
      test: /\.(jpe?g|png|gif|ico)$/i,
      use: [{
        loader: 'file-loader',
      }],
    },
    ],
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    open: true,
    port: 1234,
    hot: true,
  },
  plugins: [htmlPlugin, webAssetManifest],
};
