import { connect } from 'react-redux';
import actions from './../actions/';
import Main from './../components/Main';

const getFilteredEvents = (filter, events) => {
  if (filter === 'All') return events;
  return events.filter(event =>
    event.category.includes(filter.toLowerCase()));
};

const mapStateToProps = state => ({
  teamData: state.data.teamData,
  filteredEvents: getFilteredEvents(state.filter, state.data.events),
  allData: state.data.allData,
});

const mapDispatchToProps = dispatch => ({
  filterEvents: (filter) => {
    dispatch(actions.setFilter(filter));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
