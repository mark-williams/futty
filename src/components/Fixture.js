import React from 'react';
import PropTypes from 'prop-types';
import getShortName from '../utils/team-utils';

const Fixture = ({fixture}) => {
  const date = new Date(fixture.date).toLocaleDateString();
  return (
    <div className="fixture" key={date}>
      <div className="fixture-date">
        {date}
      </div>
      <div className="match">
        <div className="home-team">
          {getShortName(fixture.homeTeamName)}
        </div>
        <div className="result">
          -
        </div>
        <div className="away-team">
          {getShortName(fixture.awayTeamName)}
        </div>
      </div>
    </div>
  );
};

Fixture.propTypes = {
  fixture: PropTypes.object
};

export default Fixture;
