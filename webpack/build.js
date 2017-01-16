// More info on webpack's node api here: https://webpack.github.io/docs/node.js-api.html
// Allowing console call below since this is a build file

/* eslint-disable no-console,no-var*/
var webpack = require('webpack');
var webpackConfig=require('./webpack.config.prod');
var colors =require('colors');

process.env.NODE_ENV='production'; // this assures that Babel dev config (for hot reloading) doesn't apply.
console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);

webpack(webpackConfig).run(function(err,stats){
  console.log('still not error'.green);
  if(err){
    console.log(err.bold.red);
    return 1;
  }
  const jsonStats=stats.toJson();
  if(jsonStats.hasErrors){
    return jsonStats.errors.map(error=>console.log(error.red));

  }
  if(jsonStats.hasWarnings){
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }
  console.log(`Webpack stats:$(stats)`);
  // if we got this far,the build is succed
  console.log('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'.green);
  return 0;
});
