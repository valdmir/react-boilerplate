
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import {Route,BrowserRouter} from 'react-router';
import {PageContainer} from 'containers';
import {CommonLayout} from 'layouts';
import {SimplePage} from 'pages';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter} from 'react-router-redux';
const history = createHistory();

require('styles/app.scss');
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState, window);
const rootElement = document.getElementById('app');
console.log(Route)
ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <BrowserRouter>
      <div>
        <Route exact path="/" component={SimplePage}/>
      </div>
    </BrowserRouter>
  </Provider>
, rootElement);
