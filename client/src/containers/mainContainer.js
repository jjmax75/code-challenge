import { connect } from 'react-redux';
import actions from './../actions/';
import Main from './../components/Main';

const mapStateToProps = state => ({
  teamData: state.data.teamData,
  filteredEvents: state.data.events,
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
