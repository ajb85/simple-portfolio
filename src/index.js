import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import App from './App.js';

import { createBrowserHistory } from 'history';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <App />
  </Router>,
  document.getElementById('root')
);
