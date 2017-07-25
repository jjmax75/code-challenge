import React from 'react';
import PropTypes from 'prop-types';

const MatchDetails = props => (
  <div>
    {props.allData.local_date}
  </div>
);

MatchDetails.propTypes = {
  allData: PropTypes.arrayOf(
    PropTypes.any,
  ).isRequired,
};

export default MatchDetails;
