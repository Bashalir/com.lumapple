import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../atoms/card/Card';
import StyledModelCard from './style/StyledColorCard';
import Label from '../../atoms/label/Label';

export default function ColorCard({colorRGB, name, ...props}) {
  const colorSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="200"
      height="200"
    >
      <circle cx="100" cy="100" r="80" fill={colorRGB} />
    </svg>
  );

  return (
    <StyledModelCard colorRGB={colorRGB}>
      <figure>
        <Card name={name} {...props}>
          <div className="circle-color" />
        </Card>
      </figure>
      <Label title={name} />
    </StyledModelCard>
  );
}

ColorCard.propTypes = {
  colorRGB: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  props: PropTypes.any,
};
