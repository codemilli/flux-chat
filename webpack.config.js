/**
 * Created by youngmoon on 2/26/16.
 */
var path = require('path');
var webpack = require('webpack');
var NODE_ENV = process.env.NODE_ENV;

var webpackConfig = {
    output: {
        path: './',
        filename: 'js/bundle.js'
    },
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            "config": `js/config/${NODE_ENV || 'development'}.js`,
            "firechat": 'js/utils/firechat',
            "constant": 'js/infra/ChatConstants',
            "dispatcher": 'js/infra/ChatAppDispatcher',
            "Spinner": 'js/views/components/utils/Spinner'
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};


if (NODE_ENV === 'production') {
    webpackConfig = Object.assign({}, webpackConfig, {
        entry: './js/app.js',
        output: {
            path: './dist',
            filename: 'js/bundle.js'
        },
        devtool: null,
        target: 'web',
        plugins: [
            new webpack.optimize.UglifyJsPlugin({minimize: true})
        ]
    });
} else {
    webpackConfig = Object.assign({}, webpackConfig, {
        entry: './js/app.js',
        devtool: 'sourcemap',
        target: 'web'
    });
}




module.exports = webpackConfig;