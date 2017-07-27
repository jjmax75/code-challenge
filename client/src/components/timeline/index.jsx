import React from 'react';
import PropTypes from 'prop-types';
import './timeline.scss';

const getEventCategory = (event) => {
  if (event.category !== 'penaltyshot') return event.category;

  return event.value === 'Scored' ?
    `${event.category}-scored` : `${event.category}-missed`;
};

const buildEvent = event => (
  <div className={`timeline__event--${event.side}`}>
    <div className={`timeline__event--${getEventCategory(event)}`} />
    <div className='timeline__event--time'>
      { event.side !== 'both' ? `${event.time}'` : null }
    </div>
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
