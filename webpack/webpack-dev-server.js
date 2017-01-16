/*eslint-disable no-var,no-console*/
var Express = require('express');
var webpack = require('webpack');

var config = require('../config/config');
var webpackConfig = require('./webpack.config.dev');
var compiler = webpack(webpackConfig);
var host = 'localhost';
var port = 4009;
//SERVED SERVER URL CONFIG

var serverOptions = {
    contentBase: config.WEB,
    // contentBase: 'http://' + host + ':' + port,
    quiet: true,
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    publicPath: webpackConfig.output.publicPath,
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    stats: {
        colors: false,
        modules: false,
        reasons: false,
        errorDetails: true
    }
};

var app = new Express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, function onAppListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> 🚧  Webpack development server listening on port %s', port);
    }
});
