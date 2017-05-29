import React from 'react';
import { Link } from 'react-router-dom';

const League = () => (
  <div>
    <h2>Premier League 2017-17</h2>
    <div>
      <div><Link to="/team/chelsea">Chelsea</Link></div>
      <div><Link to="/team/tottenham_hotspur">Tottenham Hotspur</Link></div>
      <div><Link to="/team/man_city">Manchester City</Link></div>
      <div><Link to="/team/liverpool">Liverpool</Link></div>
    </div>
  </div>
);

export default League;
