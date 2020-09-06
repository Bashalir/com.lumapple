import React from 'react';
import PropTypes from 'prop-types';

import StyledProductCard from './styles/StyledProductCard';
import Card from '../../atoms/card/Card';
import StyledProductPhoto from './styles/StyledProductPhoto';
import StyledProductInfos from './styles/StyledProductInfos';

export default function ProductCard({
  imgRef,
  name,
  title,
  short_description,
  description,
  price,
}) {
  const urlImage = `https://res.cloudinary.com/lumapple/image/upload/v1599253253/img/${imgRef}.png`;

  return (
    <StyledProductCard>
      <Card>
        <StyledProductPhoto>
          <img src={urlImage} alt={name} />
        </StyledProductPhoto>
        <StyledProductInfos>
          <div className="product_description">
            <h5>{title}</h5>
            <br />
            <span>{short_description}</span>
            <p>{description}</p>
          </div>
          <div className="product_price">
            <span>{price}</span>
          </div>
        </StyledProductInfos>
      </Card>
    </StyledProductCard>
  );
}

ProductCard.propTypes = {
  imgRef: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  short_description: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};
