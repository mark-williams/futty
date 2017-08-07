import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fixture from './Fixture';

const FixtureHeading = styled.h2`
  font-size: 1.4rem;
`;
const Fixtures = ({fixtures}) => {
  return (
    <div>
      <FixtureHeading>Fixtures</FixtureHeading>
      {fixtures.map((f) => <Fixture key={f.date} fixture={f} />)}
    </div>
  );
};

Fixtures.propTypes = {
  fixtures: PropTypes.arrayOf(PropTypes.object)
};

export default Fixtures;
