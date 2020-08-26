import {defaultTheme, GlobalStyle} from '../src/themes';
import React from 'react';
import ReactDOM from 'react-dom';

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: defaultTheme.backgroundDefaultColor,
      },
      {
        name: 'inverted',
        value: defaultTheme.backgroundInvertedColor,
      },
    ],
  },
};
