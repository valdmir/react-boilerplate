/*eslint-disable no-var*/
function create_client_config(default_config) {
    var client_config={};
    for (var key in default_config) {
        client_config[key] = '"' + default_config[key] + '"';
    }
    return client_config;
}
module.exports = create_client_config;
