import types from './../constants';

const actions = {
  setFilter(filter) {
    return {
      type: types.SET_FILTER,
      filter,
    };
  },
};

export default actions;
