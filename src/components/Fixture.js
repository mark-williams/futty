import React from 'react';
import PropTypes from 'prop-types';
import getShortName from '../utils/team-utils';

const Fixture = ({fixture}) => {
  const date = new Date(fixture.date).toLocaleDateString();
  return (
    <div className="fixture" key={date}>
      {date} {getShortName(fixture.homeTeamName)} - {getShortName(fixture.awayTeamName)}
    </div>
  );
};

Fixture.propTypes = {
  fixture: PropTypes.object
};

export default Fixture;
