/* eslint-disable no-console,no-var, no-use-before-define */

import path from 'path';
import express from 'express';
import qs from 'qs';
var clc = require('cli-color');

import webpack from 'webpack';

import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../client/configureStore';


const app = new express();
const port = process.env.PORT || 4001;
app.use(express.static('assets'));
// app.use(express.static('static'));

//COKKIE SETUP
var cookieParser = require('cookie-parser');
app.use(cookieParser());
// for react initialization
let reactPage=require('./react-page');
var handlers = require('./handlers');
app.get('/', reactPage);
// for (var key in handlers) {
//     app.use('/api/' + key, handlers[key]);
// }


app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.send('Sorry the page doesnt exist');
});



app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log(clc.green('======================================'));
        console.log(clc.green('SERVER RUNNING ON PORT ' + port));
        console.log(clc.green('======================================'));
    }
});
