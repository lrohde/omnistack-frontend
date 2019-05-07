import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import history from './history';

import Private from './private';
import Guest from './guest';

import Main from '~/pages/Main';
import Signin from '~/pages/Auth/Signin';
import Signup from '~/pages/Auth/Signup';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signin" component={Signin} />
      <Guest path="/signup" component={Signup} />
      <Private path="/" exact component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
