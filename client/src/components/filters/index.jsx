import React from 'react';
import PropTypes from 'prop-types';
import './filters.scss';

const buildRadios = (handleFilterChange) => {
  const filterTypes = ['Goal', 'Substitution', 'Booking', 'Penalty'];

  return filterTypes.map(filter => (
    <button
      className='filters__button'
      onClick={() => handleFilterChange(filter)}
      key={filter}
    >
      {filter}
    </button>
  ));
};

const Filters = props => (
  <div className='filters'>
    { buildRadios(props.handleFilterChange) }
  </div>
);

Filters.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filters;
