import React from 'react';
import PropTypes from 'prop-types';
import './timeline.scss';

const buildEvent = event => (
  <div className={`timeline__event--${event.side}`}>
    <div className='timeline__event--label'>
      { event.label }
    </div>
  </div>
);


const Timeline = props => (
  <div className='timeline'>
    { props.filteredEvents.map(buildEvent) }
  </div>
);

Timeline.propTypes = {
  filteredEvents: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Timeline;
