import React from 'react';

import Logo from '../../atoms/logo/Logo';
import StyledLeftMenu from './styles/StyledLeftMenu';
import PictoUserGreen from './img/user_green.svg';
import PictoPlusGreen from './img/add_plus_green.svg';

const LeftMenu = () => {
  return (
    <StyledLeftMenu>
      <Logo isInverted={true} />

      <span>
        <img src={PictoPlusGreen} /> Vendez maintenant
      </span>
      <span>
        <img src={PictoUserGreen} /> Se connecter
      </span>
    </StyledLeftMenu>
  );
};

export default LeftMenu;
