import React from 'react';
import StyledButton from './styles/StyledButton';
import StyledLabel from './styles/StyledLabel';
import StyledIcon from './styles/StyledIcon';
import PropTypes from 'prop-types';
import {defaultTheme} from '../../../styles';

const Button = ({name, backgroundColor, isInverted, textColor}) => {
  return (
    <StyledButton backgroundColor={backgroundColor} isInverted={isInverted}>
      <StyledLabel name={name} textColor={textColor}>
        {name}
      </StyledLabel>
    </StyledButton>
  );
};

export const ButtonIcon = ({
  name,
  backgroundColor,
  isInverted,
  textColor,
  icon,
}) => {
  return (
    <StyledButton backgroundColor={backgroundColor} isInverted={isInverted}>
      <StyledIcon picto={icon} />
      <StyledLabel name={name} textColor={textColor}>
        {name}
      </StyledLabel>
    </StyledButton>
  );
};

Button.defaultProps = {
  backgroundColor: defaultTheme.backgroundDefaultColor,
  textColor: defaultTheme.textColor,
  isInverted: false,
};

ButtonIcon.defaultProps = {
  backgroundColor: defaultTheme.backgroundDefaultColor,
  textColor: defaultTheme.textColor,
  isInverted: false,
};

Button.displayName = 'Button';
Button.propTypes = {
  isInverted: PropTypes.bool,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  name: PropTypes.string,
};

ButtonIcon.displayName = 'ButtonIcon';
ButtonIcon.propTypes = {
  isInverted: PropTypes.bool,
  textColor: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string,
};

export default Button;
