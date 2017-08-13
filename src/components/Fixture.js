import React from 'react';
import PropTypes from 'prop-types';
import Result  from './Result';
import styled from 'styled-components';
import { getShortName, getTeamId } from '../utils/team-utils';
import { TeamLink } from '../style';

const StyledFixture = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 1.4rem;
  align-items: center;
 `;

const MatchDate = styled.div`
 margin: 0.8rem 0 0.5rem 0;
 font-size: 1.0rem;
 width: 300px;
 text-align: left;
 `;

const Match = styled.div`
  display: flex;
  flex-direction; row; 
  justify-content: center;
  color: hsl(0, 0%, 10%);
  font-size: 1.2rem;
 `;

const Team = styled.div`
  width: 200px;
  padding-top: 0.4rem;
`;

const Home = styled(Team)`
  text-align: right;
 `;

const Away = styled(Team)`
  text-align: left;
 `;

const Fixture = ({fixture}) => {
  const date = new Date(fixture.date).toLocaleDateString();
  const homeTeam = getTeamId(fixture._links.homeTeam.href);
  const awayTeam = getTeamId(fixture._links.awayTeam.href);
  return (
    <StyledFixture key={date}>
      <MatchDate>
        {date}
      </MatchDate>
      <Match>
        <Home>
          <TeamLink to={`/team/${homeTeam}`}>{getShortName(fixture.homeTeamName)}</TeamLink>
        </Home>
        <Result match={fixture} />
        <Away>
          <TeamLink to={`/team/${awayTeam}`}>{getShortName(fixture.awayTeamName)}</TeamLink>
        </Away>
      </Match>
    </StyledFixture>
  );
};

Fixture.propTypes = {
  fixture: PropTypes.object
};

export default Fixture;
