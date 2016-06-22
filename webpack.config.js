/*
 * isomorphic-react-redux-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-redux-starter-kit
 *
 * Copyright (c) 2016 jos
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var webpack = require('webpack');

var config = require(path.resolve(__dirname, 'config'));

var isDev = process.argv.some(function(arg) { return arg.match('webpack-dev-server'); });

module.exports = {
    entry: {
        script: (function() {
            var script = path.resolve(__dirname, 'js/app.js');

            if (isDev) {
                script = [
                    'webpack-dev-server/client?http://localhost:' + config.port.webpack,
                    'webpack/hot/only-dev-server',
                    script
                ];
            }

            return script;
        })()
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel!eslint'
            }
        ]
    },

    plugins: (function() {
        if (isDev) {
            return;
        }

        return [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),

            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ];
    })(),

    devServer: {
        port: config.port.webpack
    },

    output: {
        path: path.resolve(__dirname, 'public/js'),
        publicPath: 'http://localhost:' + config.port.webpack + '/js/',
        filename: '[name].js'
    }
};
