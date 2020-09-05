import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../atoms/card/Card';
import StyledCategoryCard from './styles/StyledCategoryCard';
import Label from '../../atoms/label/Label';

import MacBook from './img/macbook.svg';

export default function CategoryCard({name, imgRef}) {
  const urlImage = `https://res.cloudinary.com/lumapple/image/upload/v1599244923/svg/${imgRef}.svg`;
  return (
    <StyledCategoryCard>
      <figure>
        <Card name={name}>
          <img src={urlImage} alt={name} />
        </Card>
      </figure>
      <Label title={name} />
    </StyledCategoryCard>
  );
}

CategoryCard.propTypes = {
  imgRef: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
