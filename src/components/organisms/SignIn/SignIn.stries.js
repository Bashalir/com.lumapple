import React from 'react';
import SignUp from './SignIN';

export default {
  component: SignUp,
  title: 'SignUp',
};

export const Default = () => <SignUp />;

Default.parameters = {backgrounds: {default: 'default'}};
