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
  transform(assets) {
    return {
      files: assets,
    };
  },
});

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: '[name]-[chunkHash].js',
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
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // converts urls
          'resolve-url-loader',
          // Compiles Sass to CSS
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
    compress: true,
    historyApiFallback: true,
    open: true,
    port: 1234,
    hot: true,
    watchContentBase: true,
  },
  plugins: [htmlPlugin, webAssetManifest],
};
