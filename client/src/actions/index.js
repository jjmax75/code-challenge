import types from './../constants';

const actions = {
  setInitialData(data) {
    return {
      type: types.SET_INITIAL_DATA,
      data,
    };
  },

  setFilter(filter) {
    return {
      type: types.SET_FILTER,
      filter,
    };
  },
};

export default actions;
