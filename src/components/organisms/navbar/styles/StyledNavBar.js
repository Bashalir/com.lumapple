import styled from 'styled-components';

import {defaultTheme} from '../../../../styles';
import StyledMenuBurger from '../../../molecules/MenuBurger/styles/StyledMenuBurger';

const StyledNavBar = styled.div`
  display: inline-grid;
  width: 100%;
  height: 45px;
  grid-template-columns: 45px auto 45px;

  ${StyledMenuBurger} {
  }

  .logo_lumapple {
    display: flex;
    justify-self: center;
    .logo {
      align-self: center;
    }
  }
  .sell_now {
    display: none;
  }
  .search_input {
    display: none;
  }
  .sign_in {
    display: none;
  }

  @media (min-width: ${defaultTheme.minWidth}) {
    display: flex;
    align-content: center;

    .logo {
      margin-right: 10px;
    }
    ${StyledMenuBurger} {
      display: none;
    }

    .sell_now {
      display: inline-block;
    }
    .search_input {
      display: inline-block;
      flex-grow: 1;
    }
    .sign_in {
      display: flex;
    }
  }
`;

export default StyledNavBar;
