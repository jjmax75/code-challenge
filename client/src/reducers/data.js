import types from './../constants/';
import matchData from './../json/match_sample.json';

export default (state = matchData, action) => {
  switch (action.type) {
    case types.SET_INITIAL_DATA:
      return {
        data: action.data,
      };

    default:
      return state;
  }
};
