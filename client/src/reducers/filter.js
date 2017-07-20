import types from './../constants/';

export default (state = null, action) => {
  switch (action.type) {
    case types.SET_FILTER:
      return {
        activeFilter: action.filter,
      };

    default:
      return state;
  }
};
