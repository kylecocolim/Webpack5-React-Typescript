const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                ecma: 8,
                mangle: true,
                keep_fnames: false,
            }
        })],
        runtimeChunk: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        /*
        new CopyPlugin({
            patterns: [
                {
                    from: "public", to: "public",
                    globOptions: {
                        dot: true,
                        gitignore: true,
                        ignore: ["index.html"],
                    }
                },
            ],
        }),
        */
    ],
})