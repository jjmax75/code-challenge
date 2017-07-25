import React from 'react';
import PropTypes from 'prop-types';
import './Main.scss';

export const App = () => (
  <div>
    <header>
      <img
        src='./img/header-logo.png'
        alt='Sportdec'
        className='header__image'
      />
    </header>
    <main>
      <ol>
        <li>Teams</li>
        <li>Details - time, venue, final score</li>
        <li>Timeline</li>
        <li>Speech summary of game</li>
      </ol>
    </main>
    <footer>Footer</footer>
  </div>
);

App.propTypes = {
  data: PropTypes.string.isRequired,
};

export default App;
