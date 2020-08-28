import React from 'react';
import PropTypes from 'prop-types';

import StyledSignInButton from './styles/StyledSignInButton';
import User from './img/user.svg';

export default function SignInButton({text}) {
  return (
    <StyledSignInButton className="sign_in" text={text}>
      <img src={User} alt="Se connecter" />
      <span>{text}</span>
    </StyledSignInButton>
  );
}

SignInButton.propTypes = {
  text: PropTypes.string,
};
