import React, {useContext, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import StyledNavBar from './styles/StyledNavBar';
import SignInButton from '../../molecules/SignInButton/SignInButton';
import SearchInput from '../../molecules/SearchInput/SearchInput';
import {SellNowButton} from '../../molecules/IconButton/IconButton';
import Logo from '../../atoms/logo/Logo';
import MenuBurger from '../MenuBurger/MenuBurger';
import {Link} from 'react-router-dom';
import {firebaseAuth} from '../../../providers/AuthProvider';

export default function NavBar() {
  const {user} = useContext(firebaseAuth);

  return (
    <StyledNavBar className="navbar">
      <nav>
        <MenuBurger />
        <Link to="/">
          <Logo />
        </Link>
        <Link to={'/vendez-maintenant'}>
          <SellNowButton />
        </Link>
        <SearchInput />
        <Link to={user.loggedIn ? '/mon-compte' : '/se-connecter'}>
          <SignInButton
            text={user.loggedIn ? user.displayName : 'Se connecter'}
          />
        </Link>
      </nav>
    </StyledNavBar>
  );
}
