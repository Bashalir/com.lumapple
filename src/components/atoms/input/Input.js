import React from 'react';
import PropTypes from 'prop-types';

import {defaultTheme} from '../../../themes';
import StyledInput from './styles/StyledInput';

export default function Input({
  placeholder,
  type,
  height,
  width,
  textColor,
  backgroundColor,
  error,
  children,
  inputRef,
  ...props
}) {
  return (
    <StyledInput
      height={height}
      width={width}
      textColor={textColor}
      backgroundColor={backgroundColor}
      error={error}
    >
      <input
        placeholder={placeholder}
        ref={inputRef}
        type={type}
        {...props}
      ></input>
      {children}
    </StyledInput>
  );
}

Input.defaultProps = {
  placeholder: '',
  backgroundColor: defaultTheme.backgroundDefaultColor,
  textColor: defaultTheme.textColor,
  width: '100%',
  height: '45px',
  error: false,
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  error: PropTypes.bool,
  props: PropTypes.any,
  inputRef: PropTypes.any,
};
