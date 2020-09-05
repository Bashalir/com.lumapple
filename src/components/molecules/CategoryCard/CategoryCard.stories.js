import React from 'react';
import CategoryCard from './CategoryCard';

import Macbook from './img/macbook.svg';

export default {
  component: CategoryCard,
  title: 'CategoryCard',
};

export const Default = () => <CategoryCard name="iPhone" imgRef="iphone" />;

Default.parameters = {backgrounds: {default: 'default'}};
