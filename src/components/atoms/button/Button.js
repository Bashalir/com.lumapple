import React from 'react';
import StyledButton from './style/StyledButton';
import StyledLabel from './style/StyledLabel';
import StyledIcon from './style/StyledIcon';
import PropTypes from 'prop-types';
import {defaultTheme} from '../../../styles';

const Button = props => {
  return (
    <StyledButton
      backgroundColor={props.backgroundColor}
      isInverted={props.isInverted}
    >
      <StyledLabel name={props.name} textColor={defaultTheme.textColor}>
        {props.name}
      </StyledLabel>
    </StyledButton>
  );
};

export const ButtonIcon = props => {
  return (
    <StyledButton
      backgroundColor={props.backgroundColor}
      isInverted={props.isInverted}
    >
      <StyledIcon picto={props.icon} />
      <StyledLabel name={props.name}>{props.name}</StyledLabel>
    </StyledButton>
  );
};

Button.defaultProps = {
  backgroundColor: defaultTheme.backgroundDefaultColor,
  isInverted: false,
};

ButtonIcon.defaultProps = {
  backgroundColor: defaultTheme.backgroundDefaultColor,
  isInverted: false,
};

Button.displayName = 'Button';
Button.propTypes = {
  isInverted: PropTypes.bool,
  backgroundColor: PropTypes.string,
  name: PropTypes.string,
};

ButtonIcon.displayName = 'ButtonIcon';
ButtonIcon.propTypes = {
  isInverted: PropTypes.bool,
  name: PropTypes.string,
  icon: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string,
};

export default Button;
