/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
/* eslint-disable import/no-named-as-default */
import AppContainer from './containers/mainContainer';
/* eslint-enable */
import matchData from './json/match_sample.json';
import store from './store';

import actions from './actions/';

store.dispatch(actions.setInitialData(matchData));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.querySelector('#root'),
);
