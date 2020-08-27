import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom'; // Link

import AuthProvider from '../providers/AuthProvider';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import Home from '../components/pages/Home/Home';
import Signup from '../components/molecules/Signup/Signup';

const routes = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/se-connecter',
        component: Signup,
      },
    ],
  },
];

export default function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </AuthProvider>
    </Router>
  );
}
