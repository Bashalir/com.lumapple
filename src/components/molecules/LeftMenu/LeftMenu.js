import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import {firebaseAuth} from '../../../providers/AuthProvider';
import Logo from '../../atoms/logo/Logo';
import StyledLeftMenu from './styles/StyledLeftMenu';
import PictoUserGreen from './img/user_green.svg';
import PictoPlusGreen from './img/add_plus_green.svg';

const LeftMenu = () => {
  const {user} = useContext(firebaseAuth);

  return (
    <StyledLeftMenu>
      <Logo isInverted={true} />
      {user.loggedIn && (
        <Link to="/vendez-maintenant">
          <span>
            <img src={PictoPlusGreen} /> Vendez maintenant
          </span>
        </Link>
      )}
      <Link to={user.loggedIn ? '/mon-compte' : '/se-connecter'}>
        <span>
          <img src={PictoUserGreen} />{' '}
          {user.loggedIn ? 'Mon compte' : 'Se connecter'}
        </span>
      </Link>
    </StyledLeftMenu>
  );
};

export default LeftMenu;
