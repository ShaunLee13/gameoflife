import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { gameReducer } from './store/reducer'

/* 
Index renders our app to the page. 'store' is handled through redux
*/

const store = createStore(gameReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

