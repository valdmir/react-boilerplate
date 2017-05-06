require('babel-polyfill');

// Webpack config for development
/*eslint-disable no-var*/
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var assetsPath = path.resolve(__dirname, '../');
var url_config = require('../config/config');

//WEBPACK PLUGINS
//1 Save you from case-sensitive Linux Server issue
var ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin');

//2 Great CSS structure to code
var Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin');
var webpack_isomorphic_tools_plugin = new Webpack_isomorphic_tools_plugin(require('./webpack.isomorphic.config')).development();

var host = 'localhost';
var port = 4009;
module.exports = {
    devtool: 'inline-source-map',
    entry: {
        'boilerplate': [
            'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr&reload=true',
            './client/app.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'http://' + host + ':' + port + '/dist/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        webpack_isomorphic_tools_plugin,
        new webpack.DefinePlugin(url_config.client_config),
        new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false, __DEVELOPMENT__: true, __DEVTOOLS__: false}),
        new ForceCaseSensitivityPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',

            }, {
                test: /\.scss$/,
                loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap',
                exclude: [path.resolve(__dirname, '../client/styles'),path.resolve(__dirname, '../node_modules')]
            },
            {
               test: /\.scss$/,
               loaders: ['style','css','sass'],
               exclude: path.resolve(__dirname, '../client/components')


           },
           {
              test: webpack_isomorphic_tools_plugin.regular_expression('images'),
              loader: 'url-loader?limit=10240', // any image below or equal to 10K will be converted to inline base64 instead
            },{
              test: /\.woff$/,
              loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]'
           },{
              test: /\.woff2$/,
              loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]'
           },{
              test: /\.[ot]tf$/,
              loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]'
           },{
              test: /\.eot$/,
              loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]'
           },

        ]
    }
};
