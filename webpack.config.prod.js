const HtmlWebPlugin = require("html-webpack-plugin"),
    path = require("path"),
    WebpackAssetsManifest = require("webpack-assets-manifest");

const htmlPlugin = new HtmlWebPlugin({
    filename: "./index.html",
    favicon: "src/assets/img/favicon.ico",
    template: "./public/index.html"
});

const webAssetManifest = new WebpackAssetsManifest({
    output: path.join(__dirname, "dist/aset-manifest.json"),
    transform(assets, manifest) {
        return {
            files: assets
        };
    }
    // generate(seed, files, entrypoints) {
    //     return files.reduce((
    //         manifest, {
    //             name,
    //             path
    //         }) => ({
    //         ...manifest,
    //         [name]: path
    //     }), seed)
    // }
});

module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "static/[name]-[hash].js",
        chunkFilename: "static/[name]-[id]-[chunkhash].js",
        path: path.join(__dirname, "dist"),
        publicPath: "/"
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
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
                    "style-loader",
                    "css-loader",
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
    plugins: [htmlPlugin, webAssetManifest]
};