/*
 * Main app
 */

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import routes from './routes';

ReactDOM.render((
  <Router routes={routes} history={hashHistory} />
), document.getElementById('app'));
