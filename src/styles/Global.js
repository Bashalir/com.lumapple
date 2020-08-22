import {createGlobalStyle} from 'styled-components';
import {defaultTheme} from './themes';
import {primaryFont, typeScale} from './typography';
import {normalize} from 'polished';
import reset from './reset.css';

export const GlobalStyle = createGlobalStyle`
${reset}
${normalize()}
@import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

html {
  font-size: 16px;
  box-sizing: border-box;
}

*,*:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: ${primaryFont}
}

h5 {
  font-size: ${typeScale.small};
  font-weight: bold;

  @media (min-width: ${defaultTheme.minWidth}) {
    font-size: ${typeScale.header5};
  }
}

br {
  margin: 3px;
}
p, span {
  margin: 0;
  font-size: ${typeScale.small};
  @media (min-width: ${defaultTheme.minWidth}) {
    font-size: ${typeScale.paragraph};
  }
}

`;
