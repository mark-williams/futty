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
    let teams = [
      { name: 'Chelsea' },
      { name: 'Tottenham Hotspur' },
      { name: 'Manchester City' },
      { name: 'Liverpool' }
    ];

    const myHeaders = new Headers();
    myHeaders.append('X-Auth-Token', 'f72b1391ce7c41fdba548dfeede42897');
    fetch('http://api.football-data.org/v1/competitions/426/leagueTable', { headers: myHeaders })
      .then((resp) => { console.log(resp); return resp.json(); })
      .then((data) => this.setState({ data }))
      .catch((e) => console.log('Error:', e));

    this.setState({ teams });
  }

  render() {
    return (
      <div>
        <h2>Premier League 2017-17</h2>
        <div>
          {this.state.teams.map((t) => <div key={t.name}><Link to={`/team/${t.name}`}>{t.name}</Link></div>)}
        </div>
      </div>
    );
  }
}

export default League;
