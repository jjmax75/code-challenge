import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from './../actions/';
import './Main.scss';

export const App = () => (
  <div>
    <header><img src='./img/header-logo.png' alt='Sportdec' /></header>
    <main>Sport Dec</main>
    <footer>Footer</footer>
  </div>
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
