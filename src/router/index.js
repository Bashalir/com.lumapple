import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; // Link
import Home from './home';

const routes = [
  {
    path: '/',
    component: Home,
    routes: [{}],
  },
];

export default function AppRouter() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
