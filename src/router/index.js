import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom'; // Link

import AuthProvider from '../providers/AuthProvider';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import Home from '../components/pages/Home/Home';
import Connection from '../components/pages/Connection/Connection';
import SignUp from '../components/organisms/SignUp/SignUp';
import Account from '../components/pages/Account/Account';
import SellNow from '../components/pages/SellNow/SellNow';
import Ad from '../components/pages/Ad/Ad';
import AdForm from '../components/organisms/AdForm/AdForm';
import AdList from '../components/organisms/AdList/AdList';
import AdFind from '../components/pages/AdFind/AdFind';
import AdPage from '../components/pages/AdPage/AdPage';

const routes = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/annonces/:page',
        component: AdPage,
      },
      {
        path: '/annonce/:id',
        component: Ad,
      },
      {
        path: '/se-connecter',
        component: Connection,
      },
      {
        path: '/s-enregistrer',
        component: SignUp,
      },
      {
        path: '/rechercher/:search',
        component: AdFind,
      },
      {
        path: '/mon-compte',
        component: Account,
      },
      {
        path: '/vendez-maintenant',
        component: AdForm,
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
