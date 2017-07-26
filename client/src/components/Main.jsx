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

const getMatchDate = (date, tz) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  const getOrdinal = (num) => {
    if (num > 3 && num < 21) return 'th';
    switch (num % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };
  const d = new Date(date);
  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const dateString =
    `${day}${getOrdinal(day)} ${month}, ${year}, ${hours}:${minutes} ${tz}`;

  return dateString;
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
      <div className='match-details--title'>
        { props.allData.name }
      </div>
      <div className='match-details--date'>
        { getMatchDate(props.allData.local_date, props.allData.tz) }
      </div>
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
