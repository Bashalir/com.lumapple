import React from 'react';
import PropTypes from 'prop-types';

import StyledCard from './styles/StyledCard';
import {defaultTheme} from '../../../themes';

export default function Card({textColor, backgroundColor, children, isHover}) {
  return (
    <StyledCard
      textColor={textColor}
      backgroundColor={backgroundColor}
      isHover={isHover}
    >
      {children}
    </StyledCard>
  );
}

export const CardImage = ({image, name, textColor, backgroundColor}) => {
  return (
    <Card textColor={textColor} backgroundColor={backgroundColor}>
      <img src={image} name={name} alt={name}></img>
    </Card>
  );
};

CardImage.propTypes = {
  image: PropTypes.object,
  name: PropTypes.object,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Card.propTypes = {
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  isHover: PropTypes.bool,
};

Card.defaultProps = {
  backgroundColor: defaultTheme.backgroundDefaultColor,
  textColor: defaultTheme.textColor,
  isHover: true,
};

CardImage.defaultProps = {
  backgroundColor: defaultTheme.backgroundDefaultColor,
  textColor: defaultTheme.textColor,
};
