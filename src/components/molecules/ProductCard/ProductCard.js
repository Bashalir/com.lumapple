import React from 'react';
import PropTypes from 'prop-types';

import StyledProductCard from './styles/StyledProductCard';
import Card from '../../atoms/card/Card';

export default function ProductCard({
  photo,
  name,
  title,
  short_description,
  description,
  price,
}) {
  return (
    <StyledProductCard>
      <Card>
        <div className="product_photo">
          <img src={photo} alt={name} />
        </div>
        <div className="product_infos">
          <div className="product_description">
            <h5>{title}</h5>
            <br />
            <span>{short_description}</span>
            <p>{description}</p>
          </div>
          <div className="product_price">
            <span>{price}</span>
          </div>
        </div>
      </Card>
    </StyledProductCard>
  );
}

ProductCard.propTypes = {
  photo: PropTypes.object,
  name: PropTypes.string,
  title: PropTypes.string,
  short_description: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};
