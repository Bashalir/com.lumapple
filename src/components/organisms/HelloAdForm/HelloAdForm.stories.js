import React from 'react';
import HelloAdForm from './HelloAdForm';

export default {
  component: HelloAdForm,
  title: 'HelloAdForm',
};

export const Default = () => <HelloAdForm />;

Default.parameters = {backgrounds: {default: 'default'}};
