import React from 'react';
import PropTypes from 'prop-types';
import { lifecycle } from 'recompose';
import { getTeam, getFixtures } from '../services/statsService';
import Fixtures from './Fixtures';

const Team = ({team, fixtures}) => {
  if (!team) {
    return null;
  }

  return (
    <div>
      <h2>{team.shortName}</h2>
      <img className="team__badge" alt="team badge" src={team.crestUrl} />
      <Fixtures fixtures={fixtures} />
    </div>
  );
};

Team.propTypes = {
  team: PropTypes.object,
  fixtures: PropTypes.object
};

const getTeamData = (id) => {
  const fetchTeam = getTeam(id);
  const fetchFixtures = getFixtures(id);

  return Promise.all([fetchTeam, fetchFixtures])
    .then(responses => Promise.all(responses.map(resp => resp.json())));
};


const teamWithLifecycle = lifecycle({
  componentDidMount() {
    const teamId = this.props.match.params.id;
    getTeamData(teamId)
      .then((results) => this.setState({ team: results[0], fixtures: results[1].fixtures }))
      .catch(() => this.setState({ error: 'Error retrieving data' }));
  }
})(Team);

export default teamWithLifecycle;
export { Team };
