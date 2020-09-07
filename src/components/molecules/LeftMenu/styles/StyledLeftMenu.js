import styled from 'styled-components';

import {defaultTheme} from '../../../../themes';
import StyledLogo from '../../../atoms/logo/styles/StyledLogo';

const StyledLeftMenu = styled.div`
  display: grid;
  grid-template-rows: 5rem 2rem 2rem auto;
  height: 100vh;
  width: 80%;
  background-color: ${defaultTheme.backgroundDefaultColor};
  color: ${defaultTheme.textPrimaryColor};
  a {
    color: ${defaultTheme.textPrimaryColor};
  }
  span {
    cursor: pointer;
    margin: 20px;
    font-size: ${defaultTheme.typeScale.helper};

    img {
      margin: 20px;
      height: 24px;
      width: 24px;
    }
  }

  ${StyledLogo} {
    margin: 20px;
    justify-content: center;
    justify-self: center;
    display: flex;
    height: 4rem;
    text-align: center;

    .logo {
      height: 3rem;
      width: 10rem;
      align-self: center;
    }
  }
`;

export default StyledLeftMenu;
