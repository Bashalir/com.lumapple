import React from 'react';
import ColorCard from './ColorCard';

export default {
  component: ColorCard,
  title: 'ColorCard',
};

export const Default = () => <ColorCard name="Silver" colorRGB="#ebebe3" />;

Default.parameters = {backgrounds: {default: 'default'}};
