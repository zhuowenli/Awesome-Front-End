/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */

var webpack = require('webpack');

module.exports = {
    entry: './js/index.js',
    output: {
        path: __dirname,
        filename: './build/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.(sass|scss)$/, loader: 'style!css!sass' },
            { test: /\.css$/, loader: 'style!css' },
        ]
    }
}