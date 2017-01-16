/*eslint-disable no-var*/
var PROD_CONFIG = require('./prod.config.js');
var DEV_CONFIG = require('./dev.config.js');
var LOCAL_CONFIG = require('./local.config.js');
var url_config;
switch (process.env.NODE_ENV) {
    case 'production':
        if (process.env.URL_CONFIG == 'local'){
            url_config = LOCAL_CONFIG;
        }
        else{
            url_config = PROD_CONFIG;
        }
        break;
    case 'development':
        url_config = DEV_CONFIG;
        break;
    default:
        url_config = DEV_CONFIG;
}

var clc = require('cli-color');
module.exports = url_config;
