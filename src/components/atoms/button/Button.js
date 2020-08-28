import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './styles/StyledButton';
import StyledLabel from './styles/StyledLabel';
import {defaultTheme} from '../../../themes';

export default function Button({
  name,
  backgroundColor,
  isInverted,
  textColor,
  borderColor,
  error,
  children,
  disabled,
  ...props
}) {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      isInverted={isInverted}
      error={error}
      disabled={disabled}
      {...props}
    >
      {children}
      <StyledLabel name={name} textColor={textColor}>
        {name}
      </StyledLabel>
    </StyledButton>
  );
}

Button.defaultProps = {
  backgroundColor: defaultTheme.backgroundDefaultColor,
  textColor: defaultTheme.textColor,
  isInverted: false,
  error: false,
  disabled: false,
};

Button.displayName = 'Button';
Button.propTypes = {
  isInverted: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  name: PropTypes.string,
  borderColor: PropTypes.string,
  children: PropTypes.node,
  props: PropTypes.any,
};
