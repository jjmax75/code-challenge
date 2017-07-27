import types from './../constants/';

export default (state = 'All', action) => {
  switch (action.type) {
    case types.SET_FILTER:
      return action.filter;

    default:
      return state;
  }
};
