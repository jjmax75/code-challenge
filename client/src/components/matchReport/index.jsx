import React from 'react';
import PropTypes from 'prop-types';

const MatchReport = props => (
  <div>
    <button onClick={() => props.handlePlayMatchReport()}>
      Play Match Report
    </button>
  </div>
);

MatchReport.propTypes = {
  handlePlayMatchReport: PropTypes.func.isRequired,
};

export default MatchReport;
