/*eslint-disable no-var*/
require('babel-register');
// require('./server')

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';
var webpackIsomorphicConfig = require('../webpack/webpack.isomorphic.config');

var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
// global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicConfig)
var path = require('path');

var rootDir = path.resolve(__dirname, '..');
global.__webpackIsomorphicTools__ = new WebpackIsomorphicTools(webpackIsomorphicConfig)
  .development(__DEVELOPMENT__)
  .server(rootDir, function() {
      return;
  });
require('./server');
