import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {defaultTheme, GlobalStyle} from '../src/themes';

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Story />
      </BrowserRouter>
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
