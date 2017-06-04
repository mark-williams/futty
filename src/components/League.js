import React from 'react';
import { Link } from 'react-router-dom';
import { getLeagueTable } from '../services/statsService';

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
      .catch((e) => console.log('Error:', e));
  }

  mapLeagueData(data) {
    return data.map((team) => {
      return { ...team, id: this.getTeamId(team) };
    })
  }

  getTeamId(team) {
    // Sadly the api doesn't include the id of the team in its response, so we'll have to
    // extract it from the link it provides
    const parts = team._links.team.href.split('/');
    return parseInt(parts[parts.length - 1], 10);
  }

  renderHeader() {
    return (
      <div className="league-table__row">
        <div className="league-table__row--name header">Team</div>
        <div className="league-table__row--amount header">Points</div>
      </div>
    );
  }

  renderRow(team) {
    return (
      <div key={team.teamName} className="league-table__row">
        <Link className="league-table__row--name" key={team.teamName} to={`/team/${team.id}`}>{team.teamName}</Link>
        <div className="league-table__row--amount">{team.points}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="league">
        <h2>Premier League 2017-17</h2>
        <div className="league-table">
          {this.renderHeader()}
          {this.state.teams && this.state.teams.map((t) => this.renderRow(t))}
        </div>
      </div>
    );
  }
}

export default League;
