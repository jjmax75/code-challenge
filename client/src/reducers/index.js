import types from './../constants';

export const initialState = {
  data: {},
  activeFilter: undefined,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILTER:
      return {
        ...state,
        activeFilter: action.filter,
      };

    default:
      return state;
  }
};

export default reducer;
