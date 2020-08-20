import React from 'react';

import StyledNavBar from './styles/StyledNavBar';

import SignIn from '../../molecules/SignIn/SignIn';
import SearchInput from '../../molecules/SearchInput/SearchInput';
import {SellNow} from '../../molecules/IconButton/IconButton';
import Logo from '../../atoms/logo/Logo';

export default function NavBar() {
  return (
    <StyledNavBar>
      <Logo />
      <SellNow />
      <SearchInput />
      <SignIn />
    </StyledNavBar>
  );
}
