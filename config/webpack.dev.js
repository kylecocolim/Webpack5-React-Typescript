const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        before: function (app, server, compiler) { /* SomeThing Middleware */ },
        after: function (app, server, compiler) { /* SomeThing Middleware */ },
        host: '0.0.0.0',
        port: 3000,
        clientLogLevel: 'info',
        compress: true, // gzip Compress Delivery
        overlay: true,
        hot: true,
        liveReload: true,
        historyApiFallback: true,
    },
})