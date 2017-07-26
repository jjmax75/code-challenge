import React from 'react';
import PropTypes from 'prop-types';
import './matchDetails.scss';

const MatchDetails = props => (
  <div className='match-details'>
    <div className='match-details__competition'>
      {props.allData.competition_name}
    </div>
    <div className='match-details__venue'>
      {props.allData.venue_name}, {props.allData.city}
    </div>
    <div className='match-details__referee'>
      Referee: {props.allData.referee}
    </div>
  </div>
);

MatchDetails.propTypes = {
  allData: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
};

export default MatchDetails;
