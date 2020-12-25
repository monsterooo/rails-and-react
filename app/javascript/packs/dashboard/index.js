import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import About from './About';
import Home from './Home';
export default () => {
  const match = useRouteMatch();
  console.log(match)
  return (
    <Switch>
      <Route exact path={match.path}>
        <Home />
      </Route>
      <Route path={`${match.path}/about`}>
        <About />
      </Route>
    </Switch>
  )
}