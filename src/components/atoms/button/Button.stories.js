import React from 'react';
import Button, {ButtonIcon} from './Button';
import addPlus from '../../../assets/img/add_plus.svg';
import {defaultTheme} from '../../../styles';

export default {
  component: Button,
  title: 'Button',
};

export const Default = () => <Button name="Button" />;
export const Inverted = () => (
  <ButtonIcon
    backgroundColor={defaultTheme.backgroundInvertedColor}
    name="Vendez maintenant"
    icon={addPlus}
    isInverted="true"
  />
);

Default.parameters = {backgrounds: {default: 'default'}};
Inverted.parameters = {backgrounds: {default: 'inverted'}};
