import React from 'react';
import PropTypes from 'prop-types';

import {CardImage} from '../../atoms/card/Card';
import {defaultTheme} from '../../../styles';
import StyledCategoryCard from './style/StyledCategoryCard';
import Label from '../../atoms/label/Label';

export default function CategoryCard({image, name}) {
  return (
    <StyledCategoryCard>
      <figure>
        <CardImage image={image} name={name} />
      </figure>
      <Label title={name} />
    </StyledCategoryCard>
  );
}

CategoryCard.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};
