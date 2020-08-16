import React from 'react';
import PropTypes from 'prop-types';

import {defaultTheme} from '../../../styles';
import StyledInput from './styles/StyledInput';

export const Input = ({
  placeholder,
  type,
  height,
  width,
  textColor,
  backgroundColor,
  children,
}) => {
  return (
    <StyledInput
      height={height}
      width={width}
      textColor={textColor}
      backgroundColor={backgroundColor}
      type={type}
    >
      <input placeholder={placeholder}></input>
      {children}
    </StyledInput>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
};

Input.defaultProps = {
  placeholder: '',
  backgroundColor: defaultTheme.backgroundDefaultColor,
  textColor: defaultTheme.textColor,
  width: '50vw',
  height: '45px',
};
