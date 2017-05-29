import React from 'react';
import PropTypes from 'prop-types';

const getTeamName = (n) => {
  return n
    .replace('_', ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
};

const Team = ({match}) => {
  const teamName = match.params.name && getTeamName(match.params.name);
  return (
    <div>
      <h2>{teamName}</h2>
      <h3>Team details will go here</h3>
    </div>
  );
};

Team.propTypes = {
  match: PropTypes.object
};

export default Team;
