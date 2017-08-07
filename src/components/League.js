import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getLeagueTable } from '../services/statsService';
import getShortName from '../utils/team-utils';


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
      return { ...team, id: this.getTeamId(team) };
    });
  }

  getTeamId(team) {
    // Sadly the api doesn't include the id of the team in its response, so we'll have to
    // extract it from the link it provides
    const parts = team._links.team.href.split('/');
    return parseInt(parts[parts.length - 1], 10);
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
          <Link to={`/team/${team.id}`}>{getShortName(team.teamName)}</Link>
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
