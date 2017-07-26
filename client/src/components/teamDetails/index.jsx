import React from 'react';
import PropTypes from 'prop-types';
import './teamDetails.scss';

const getTeamPens = score => `PENS - ${score}`;

const getTeamScore = (team) => {
  let teamScore = '';

  teamScore += `FT - ${team.score} `;
  teamScore += `( HT - ${team.halfscore} )`;

  return teamScore;
};

const getTeamDetails = teamData => (
  teamData.map(team => (
    <div>
      <div className='team-details__name'>
        { team.name }
      </div>
      <div className='team-details__score'>
        { team.shootoutscore ?
          <div className='team-details__score--pens'>
            { getTeamPens(team.shootoutscore) }
          </div>
          : null
        }
        { getTeamScore(team) }
      </div>
    </div>
  ))
);

const TeamDetails = props => (
  <div className='team-details'>
    { getTeamDetails(props.teamData) }
  </div>
);

TeamDetails.propTypes = {
  teamData: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default TeamDetails;
