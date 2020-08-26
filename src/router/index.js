import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom'; // Link

import RouteWithSubRoutes from './RouteWithSubRoutes';
import Home from '../components/pages/Home/Home';

const routes = [
  {
    path: '/',
    component: Home,
  },
];

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}
