/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './js/app.jsx',
    output: {
        path: __dirname,
        filename: './build/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx$/,                loader: 'jsx?harmony'},
            { test: /\.(sass|scss)$/,        loader: 'style!css!sass' },
            { test: /\.css$/,                loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.(woff|ttf|eot|svg)$/, loader: 'url?limit=8192' }, // <=8k 转化为 base64
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?{progressive: true,optimizationLevel: 7,interlaced: false,pngquant: {quality: "65-90", speed: 4}}'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("build/common.css")
    ]
}