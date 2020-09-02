import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom'; // Link

import AuthProvider from '../providers/AuthProvider';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import Home from '../components/pages/Home/Home';
import Connection from '../components/pages/Connection/Connection';
import SignUp from '../components/organisms/SignUp/SignUp';
import Account from '../components/pages/Account/Account';
import SellNow from '../components/pages/SellNow/SellNow';

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

      {
        path: '/mon-compte',
        component: Account,
      },
      {
        path: '/vendez-maintenant',
        component: SellNow,
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
