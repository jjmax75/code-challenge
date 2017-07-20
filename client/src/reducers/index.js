import { combineReducers } from 'redux';

import data from './data';
import filter from './filter';

const appReducers = combineReducers({
  data,
  filter,
});

export default appReducers;
