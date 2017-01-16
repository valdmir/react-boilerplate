/*eslint-disable no-var,no-console*/
var express = require('express');
var router = express.Router();

import configureStore from '../../client/configureStore';
import url_config from '../../config/config';


var assetCollection = __webpackIsomorphicTools__.assets();
var mainJs = assetCollection.javascript.donkey;
var mainCss = assetCollection.styles.donkey;
var mainJsLine,mainCssLine;
if (__DEVELOPMENT__){
    mainJsLine = assetCollection.javascript.donkey? `<script src="http://localhost:4009/dist/donkey.js"></script>` : '';
    mainCssLine = assetCollection.styles.donkey ? `<link rel="stylesheet" type="text/css" href="${mainCss}" />` : '';
}
else {
    mainJsLine = `<script src="${mainJs}"></script>`;
    mainCssLine = `<link rel="stylesheet" type="text/css" href="${mainCss}" />`;
}

function startPage(initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>React Boilerplate</title>
        <link rel="icon" type="image/png" href="/images/favicon.gif" />




        ${mainCssLine}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons "rel="stylesheet"/>
      </head>
      <body>
        <div id="app"></div>
        ${mainJsLine}
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
      </body>
    </html>
    `;
}
// <link rel="stylesheet" type="text/css" href="/css/theme-md-default/bootstrap.css" />


// This is fired every time the server side receives a request

function handleRender(req, res) {
    if(req.cookies.is_logged_in=='true'){
        const initialState = {};
        const store = configureStore(initialState);
        const finalState = store.getState();
        res.send(startPage(finalState));
    }
    else{
        res.redirect(url_config.WEB);
        // res.redirect(req.protocol + "://" + req.headers.origin);
    }
    return;

}

// ROUTER ASSIGNMENT
router.get('/*', handleRender);

exports.index = router;