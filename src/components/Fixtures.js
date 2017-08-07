import React from 'react';
import PropTypes from 'prop-types';
import Fixture from './Fixture';

const Fixtures = ({fixtures}) => {
  return (
    <div>
      <h2>Fixtures</h2>
      {fixtures.map((f) => <Fixture fixture={f} />)}
    </div>
  );
};

Fixtures.propTypes = {
  fixtures: PropTypes.arrayOf(PropTypes.object)
};

export default Fixtures;
