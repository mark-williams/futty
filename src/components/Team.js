import React from 'react';
import PropTypes from 'prop-types';
import { lifecycle } from 'recompose';
import { getTeam } from '../services/statsService';

const Team = ({team}) => {
  if (!team) {
    return null;
  }

  return (
    <div>
      <h2>{team.shortName}</h2>
      <img className="team__badge" src={team.crestUrl} />
    </div>
  );
};

Team.propTypes = {
  team: PropTypes.object
};


const teamWithLifecycle = lifecycle({
  componentDidMount() {
    getTeam(this.props.match.params.id)
      .then((resp) => resp.json())
      .then(team => this.setState({ team }));
  }
})(Team);

export default teamWithLifecycle;
export { Team };
