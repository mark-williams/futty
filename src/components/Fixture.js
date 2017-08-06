import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getShortName from '../utils/team-utils';


const StyledFixture = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 1.4rem;
  align-items: center;
 `;


const MatchDate = styled.div`
 margin: 0.8rem 0.5rem;
 font-size: 1.1em;
 width: 300px;
 text-align: left;
 `;

const Match = styled.div`
  display: flex;
  flex-direction; row; 
  justify-content: center;
  color: hsl(0, 0%, 10%);
  font-size: 1.2em;
 `;

const Home = styled.div`
  min-width: 120px;
  text-align: right;
 `;

const Result = styled.div`
  min-width: 90px;
`;

const Away = styled.div`
  min-width: 120px;
  text-align: left;
 `;


const Fixture = ({fixture}) => {
  const date = new Date(fixture.date).toLocaleDateString();
  return (
    <StyledFixture key={date}>
      <MatchDate>
        {date}
      </MatchDate>
      <Match>
        <Home>
          {getShortName(fixture.homeTeamName)}
        </Home>
        <Result>
          -
        </Result>
        <Away>
          {getShortName(fixture.awayTeamName)}
        </Away>
      </Match>
    </StyledFixture>
  );
};

Fixture.propTypes = {
  fixture: PropTypes.object
};

export default Fixture;
