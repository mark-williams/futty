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
      .then((data) => this.setState({ teams: data.standing }))
      .catch((e) => console.log('Error:', e));
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
        <Link className="league-table__row--name" key={team.teamName} to={`/team/${team.teamName}`}>{team.teamName}</Link>
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
