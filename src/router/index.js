import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom'; // Link

import AuthProvider from '../providers/AuthProvider';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import Home from '../components/pages/Home/Home';
import Connection from '../components/pages/Connection/Connection';
import SignUp from '../components/organisms/SignUp/SignUp';

const routes = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/se-connecter',
        component: Connection,
      },
      {
        path: '/s-enregistrer',
        component: SignUp,
      },

      // {
      //   path: '/mon_compte',
      //   component: Account,
      // },
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
