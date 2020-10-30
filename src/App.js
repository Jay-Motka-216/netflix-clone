import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/route';

import { Home, Browse, Signin, Signup } from './pages';

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
    </Router>
  );
}

export default App;
