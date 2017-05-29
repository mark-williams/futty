import React from 'react';
import { Route, Switch } from 'react-router';
import League from './components/League';
import Team from './components/Team';

const routes =
  (<Switch>
    <Route path="/league" component={League} />
    <Route path="/team/:name" component={Team} />
    <Route component={League} />
  </Switch>);

export default routes;
