import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from './../actions/';

export const App = () => (
  <div>Sportdec</div>
);

App.propTypes = {
  someData: PropTypes.string.isRequired,
};

const mapStateToProps = state => state.matchReportApp;

const mapDispatchToProps = dispatch => ({
  filterEvents: (filter) => {
    dispatch(actions.setFilter(filter));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
