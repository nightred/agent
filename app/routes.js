
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';

import AppContainer from './containers/app.container';
import TestContainer from './containers/test.container';
import WelcomeContainer from './containers/welcome.container';

module.exports = (
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRoute component={WelcomeContainer}/>
      <Route path='/test' component={TestContainer} />
    </Route>
  </Router>
)
