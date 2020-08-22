import styled from 'styled-components';

import {defaultTheme} from '../../../../styles';

const StyledNavBar = styled.div`
  display: flex;
  align-content: center;
  align-items: center;

  .logo_lumapple {
    display: flex;
    align-self: center;
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
