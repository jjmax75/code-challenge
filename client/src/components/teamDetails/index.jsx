import React from 'react';
import PropTypes from 'prop-types';

const TeamDetails = props => (
  <div>
    {props.teamData[0].name}
  </div>
);

TeamDetails.propTypes = {
  teamData: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default TeamDetails;
