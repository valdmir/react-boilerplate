/*eslint-disable no-var*/
require('babel-polyfill');

// Webpack config for development
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var projectRootPath = path.resolve(__dirname, '../');
var assetsPath = path.resolve(projectRootPath, './assets/static/dist');

var url_config = require('../config/config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//WEBPACK PLUGINS
//1 Save you from case-sensitive Linux Server issue
var ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin');

//2 Great CSS structure to code
var Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin');
var webpack_isomorphic_tools_plugin =
    new Webpack_isomorphic_tools_plugin(require('./webpack.isomorphic.config'));

//3
var CleanPlugin = require('clean-webpack-plugin');
let configuration={
    // devtool: 'inline-source-map',
    devtool: 'source-map',
    entry: {
            [url_config.app_name]: [
                './client/app.js',
        ]
    },
    output: {
        path: assetsPath,
        filename: '[name]-[hash].js',
        publicPath: '/static/dist/'
    },
    module: {
        loaders: [  {
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        loader: 'babel',
                    },
                    {
                        test: /\.scss$/,
                        loader: ExtractTextPlugin.extract('style-loader', 'css?modules&importLoaders=2&sourceMap!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true')
                    },
                ]
    },
    noInfo:false,
    progress:true,
    plugins: [


        new CleanPlugin([assetsPath], { root: projectRootPath }),

        // css files from the extract-text-plugin loader
        new ExtractTextPlugin({filename:'[name]-[chunkhash].css', allChunks: true}),
        new webpack.DefinePlugin(url_config.client_config),
        new webpack.DefinePlugin({
            __CLIENT__: true,
            __SERVER__: false,
            __DEVELOPMENT__: false,
            __DEVTOOLS__: false
        }),
        // new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),
        new webpack.UglifyJsPlugin({
            sourceMap: false,
            mangle: false,
            // mangle: {
            //     except: ['$super', '$', 'exports', 'require']
            // },
            compress: {
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true,
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new ForceCaseSensitivityPlugin(),
        webpack_isomorphic_tools_plugin
    ],
};
module.exports =configuration;
