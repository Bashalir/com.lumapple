import React from 'react';

import StyledNavBar from './styles/StyledNavBar';

import SignIn from '../../molecules/SignIn/SignIn';
import SearchInput from '../../molecules/SearchInput/SearchInput';
import {SellNow} from '../../molecules/IconButton/IconButton';
import Logo from '../../atoms/logo/Logo';
import MenuBurger from '../MenuBurger/MenuBurger';

export default function NavBar() {
  return (
    <StyledNavBar className="navbar">
      <nav>
        <MenuBurger />
        <Logo />
        <SellNow />
        <SearchInput />
        <SignIn />
      </nav>
    </StyledNavBar>
  );
}
