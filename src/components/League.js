import React from 'react';
import styled from 'styled-components';
import { TeamLink } from '../style';
import { getLeagueTable } from '../services/statsService';
import { getShortName, getTeamId } from '../utils/team-utils';

const LeagueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeagueTable = styled.div`
  width: 30%;
  min-width: 200px;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const LeagueTableRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-bottom: 8px;
`;

const TeamName = styled.div`
  flex: 5;
`;

const Value = styled.div`
  flex: 1;
  text-align: right;
`;

const LeagueTableHeader = styled(LeagueTableRow)`
  font-weight: bold;
`;

class League extends React.Component {
  constructor() {
    super();

    this.state = {
      teams: []
    };
  }

  componentDidMount() {
    getLeagueTable()
      .then((resp) => resp.json())
      .then((data) => this.setState({ teams: this.mapLeagueData(data.standing) }))
      .catch(() => this.setState({ error: 'Failed to retrieve data' }));
  }

  mapLeagueData(data) {
    return data.map((team) => {
      return { ...team, id: this.getIdFromTeam(team) };
    });
  }

  getIdFromTeam(team) {
    // Sadly the api doesn't include the id of the team in its response, so we'll have to
    // extract it from the link it provides
    return getTeamId( team._links.team.href);
  }

  renderHeader() {
    return (
      <LeagueTableHeader>
        <TeamName>Team</TeamName>
        <Value>Points</Value>
      </LeagueTableHeader>
    );
  }

  renderRow(team) {
    return (
      <LeagueTableRow key={team.teamName}>
        <TeamName key={team.teamName}>
          <TeamLink to={`/team/${team.id}`}>{getShortName(team.teamName)}</TeamLink>
        </TeamName>
        <Value>{team.points}</Value>
      </LeagueTableRow>
    );
  }

  render() {
    return (
      <LeagueContainer>
        <h2>Premier League 2017-18</h2>
        <LeagueTable>
          {this.renderHeader()}
          {this.state.teams && this.state.teams.map((t) => this.renderRow(t))}
        </LeagueTable>
      </LeagueContainer>
    );
  }
}

export default League;
