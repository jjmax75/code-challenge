import React from 'react';
import PropTypes from 'prop-types';
import './Main.scss';

// components
import TeamDetails from './teamDetails/';
import MatchDetails from './matchDetails/';
import Filters from './filters/';
import Timeline from './timeline/';
import MatchReport from './matchReport/';

const handlePlayMatchReport = (report) => {
  console.log('play match report:', report);
};

export const App = props => (
  <div>
    <header>
      <img
        src='./img/header-logo.png'
        alt='Sportdec'
        className='header__image'
      />
    </header>
    <main>
      <TeamDetails teamData={props.teamData} />
      <MatchDetails allData={props.allData} />
      <Filters handleFilterChange={props.filterEvents} />
      <Timeline filteredEvents={props.filteredEvents} />
      <MatchReport handlePlayMatchReport={() => handlePlayMatchReport(props.report)} />
    </main>
    <footer>Match Report App</footer>
  </div>
);

App.propTypes = {
  teamData: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  filteredEvents: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  allData: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  report: PropTypes.string.isRequired,
  filterEvents: PropTypes.func.isRequired,
};

export default App;
