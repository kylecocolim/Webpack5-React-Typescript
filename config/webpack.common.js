const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


console.log("\x1b[33m", `WebPack Version : ${webpack.version}`);
const ROOT = path.resolve(__dirname, '../')
module.exports = {
    mode: "development",
    entry: {
        main: './src/index.tsx',
    },
    output: {
        path: path.join(ROOT, 'build'),
        publicPath: '/',
        chunkFilename: 'static/js/[name].[contenthash].js',
        filename: 'static/js/[name].[contenthash].js',
    },
    resolve: {
        modules: ['../node_modules'],
        extensions: ['.tsx', '.js', '.ts'],
        alias: {
            assets: path.resolve(__dirname, '../src/assets'),
            style: path.resolve(__dirname, '../src/style'),
            '@': path.resolve(__dirname, 'src/')
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sourceMap: true,
                            sassOptions: {
                                fiber: require("fibers"),
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    },
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    name: 'static/media/[contenthash].[ext]',
                    limit: 10000,
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html'
        }),
        new NodePolyfillPlugin(),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash].css',
            chunkFilename: 'static/css/[id].[contenthash].css',
        }),
    ],
}
