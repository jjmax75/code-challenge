import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => (
  <div>
    <button onClick={() => props.handleFilterChange('goals')}>Filters</button>
  </div>
);

Filters.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filters;
