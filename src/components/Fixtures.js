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

const Fixtures = ({fixtures}) => {
  return (
    <div>
      <h4>Fixtures</h4>
      {fixtures.map((f) => <Fixture fixture={f} />)}
    </div>
  );
};

export default Fixtures;
