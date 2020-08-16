import React from 'react';
import PropTypes from 'prop-types';

import StyledCard from './styles/StyledCard';
import {defaultTheme} from '../../../styles';

const Card = ({height, width, textColor, backgroundColor, children}) => {
  return (
    <StyledCard
      height={height}
      width={width}
      textColor={textColor}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledCard>
  );
};

export const CardImage = ({
  image,
  name,
  height,
  width,
  textColor,
  backgroundColor,
}) => {
  return (
    <Card
      height={height}
      width={width}
      textColor={textColor}
      backgroundColor={backgroundColor}
    >
      <img src={image} name={name} alt={name}></img>
    </Card>
  );
};

CardImage.propTypes = {
  image: PropTypes.object,
  name: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Card.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  backgroundColor: defaultTheme.backgroundDefaultColor,
  textColor: defaultTheme.textColor,
  width: '75px',
  height: '75px',
};

CardImage.defaultProps = {
  backgroundColor: defaultTheme.backgroundDefaultColor,
  textColor: defaultTheme.textColor,
  width: '75px',
  height: '75px',
};

export default Card;
