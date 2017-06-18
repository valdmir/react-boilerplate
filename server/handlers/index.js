// var normalizedPath = require("path").join(__dirname, "handlers");
require("fs").readdirSync(__dirname).forEach(function(file) {
  let moduleName = file.slice(0, -3);
  if (moduleName != 'index') {
    exports[moduleName] = require('./' + moduleName);
  }
});
