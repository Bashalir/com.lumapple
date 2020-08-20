import React from 'react';
import PropTypes from 'prop-types';

import {Button} from '../../atoms/index';
import {defaultTheme} from '../../../styles';
import StyledIcon from './styles/StyledIcon';
import addPlus from './img/add_plus.svg';

export default function IconButton({
  name,
  backgroundColor,
  isInverted,
  textColor,
  icon,
}) {
  return (
    <Button
      name={name}
      backgroundColor={backgroundColor}
      textColor={textColor}
      isInverted={isInverted}
    >
      <StyledIcon picto={icon} />
    </Button>
  );
}

export const SellNow = () => {
  return (
    <IconButton
      backgroundColor={defaultTheme.backgroundInvertedColor}
      name="Vendez maintenant"
      icon={addPlus}
      isInverted="true"
      className="sell_now"
    />
  );
};

IconButton.displayName = 'IconButton';
IconButton.propTypes = {
  isInverted: PropTypes.bool,
  textColor: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string,
};
