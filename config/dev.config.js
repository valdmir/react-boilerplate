/*eslint-disable no-var*/
var create_client_config = require('./utils');

var default_config = {
    "NODE_ENV": "development",
    "environment": "DEVELOPMENT ON LOCAL",
    "app_name":"boilerplate",
};



default_config.client_config = create_client_config(default_config);
module.exports = default_config;
