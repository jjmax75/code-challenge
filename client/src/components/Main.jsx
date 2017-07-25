import React from 'react';
import PropTypes from 'prop-types';
import './Main.scss';

// components
import TeamDetails from './teamDetails/';
import MatchDetails from './matchDetails/';
import Timeline from './timeline/';

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
      <Timeline filteredEvents={props.filteredEvents} />
      <ol>
        <li>Speech summary of game</li>
      </ol>
    </main>
    <footer>Footer</footer>
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
};

export default App;
