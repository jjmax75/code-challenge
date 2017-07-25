import React from 'react';
import PropTypes from 'prop-types';

const Timeline = props => (
  <div>
    {props.filteredEvents[0].label}
  </div>
);

Timeline.propTypes = {
  filteredEvents: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Timeline;
