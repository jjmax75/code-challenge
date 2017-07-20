/* global window */

import { combineReducers, createStore } from 'redux';
import matchReportApp from './reducers';

const reducers = combineReducers({
  matchReportApp,
});

/* eslint-disable no-underscore-dangle */
export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
