import React from 'react';

import StyledLogo from './styles/StyledLogo';
import LogoLumapple from './img/logoLumapple.svg';

export default function Logo() {
  return (
    <StyledLogo className="logo_lumapple">
      <img className="logo" src={LogoLumapple} alt="Lumapple" />
    </StyledLogo>
  );
}
