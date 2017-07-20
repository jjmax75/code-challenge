import { combineReducers, createStore } from 'redux';
import matchReportApp from './reducers';

const reducers = combineReducers({
  matchReportApp,
});

export default createStore(reducers);  
