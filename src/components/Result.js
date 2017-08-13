import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Score = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const Goals = styled.div`
  background-color: orange;
  color: black;
  padding: 0.2rem 0.4rem;
  margin: 0.1rem;
`;
const Result = ({ match }) => {
  const result = match.result;
  return (
    match.status === 'FINISHED' ?
      <Score>
        <Goals>{result.goalsHomeTeam}</Goals> <Goals>{result.goalsAwayTeam}</Goals>
      </Score>
      : <Score> - </Score>
  );
};

Result.propTypes = {
  match: PropTypes.object
};

export default Result;
