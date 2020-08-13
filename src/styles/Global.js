import {createGlobalStyle} from 'styled-components';
import {primaryFont} from './typography';
import {normalize} from 'polished';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
${normalize()}
@import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700,800&display=swap');

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


`;
