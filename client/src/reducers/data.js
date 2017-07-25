import types from './../constants/';

export default (state = '', action) => {
  switch (action.type) {
    case types.SET_INITIAL_DATA:
      return {
        teamData: action.data.team_data,
        events: action.data.events,
        allData: action.data,
      };

    default:
      return state;
  }
};
