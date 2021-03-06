import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';

import App from './App';

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    </Route>
  </Router>,
  document.getElementById('root')
)
