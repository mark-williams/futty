import React from 'react';
import { Route } from 'react-router';
import League from './components/League';
import Team from './components/Team';

const routes =
  (<div>
    <Route path="/league" component={League} />
    <Route path="/team/:name" component={Team} />
  </div>);

export default routes;
