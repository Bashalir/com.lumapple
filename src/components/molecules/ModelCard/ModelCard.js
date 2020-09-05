import React from 'react';
import PropTypes from 'prop-types';

import {CardImage} from '../../atoms/card/Card';
import StyledModelCard from './style/StyledModelCard';
import Label from '../../atoms/label/Label';

export default function ModelCard({imgRef, name}) {
  const urlImage = `https://res.cloudinary.com/lumapple/image/upload/v1599253253/img/${imgRef}.png`;
  return (
    <StyledModelCard>
      <figure>
        <CardImage image={urlImage} name={name} />
      </figure>
      <Label title={name} />
    </StyledModelCard>
  );
}

ModelCard.propTypes = {
  imgRef: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
