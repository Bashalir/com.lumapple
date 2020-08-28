import React from 'react';
import SignInButton from './SignInButton';

export default {
  component: SignInButton,
  title: 'SignInButton',
};

export const Default = () => <SignInButton />;

Default.parameters = {backgrounds: {default: 'inverted'}};
