import React from 'react';
import { Link } from 'react-router-dom';

class League extends React.Component {
  constructor() {
    super();

    this.state = {
      teams: []
    };
  }

  componentDidMount() {
    const headers = new Headers();
    headers.append('X-Auth-Token', 'f72b1391ce7c41fdba548dfeede42897');
    fetch('http://api.football-data.org/v1/competitions/426/leagueTable', { headers: headers })
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
          {this.state.teams.map((t) => this.renderRow(t))}
        </div>
      </div>
    );
  }
}

export default League;
