import {defaultTheme} from '../src/styles';

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
