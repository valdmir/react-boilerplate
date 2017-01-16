import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';

import {PageContainer} from 'containers';
import {CommonLayout} from 'layouts';
import {SimplePage} from 'pages';

export default  (
  <Route path="/">
    <IndexRoute component={SimplePage}/>
  </Route>
);
