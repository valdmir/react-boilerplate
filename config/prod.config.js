/*eslint-disable no-var*/
var create_client_config = require('./utils');

var default_config = {
    "NODE_ENV": "production",
    "environment": "PRODUCTION",
    "app_name":"boilerplate",
};


default_config.client_config = create_client_config(default_config);
module.exports = default_config;
