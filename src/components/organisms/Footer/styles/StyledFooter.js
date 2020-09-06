import styled from 'styled-components';

import {defaultTheme} from '../../../../themes';

const StyledFooter = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${defaultTheme.backgroundFooterColor};
  color: ${defaultTheme.textColorInverted};
  padding: 20px;
  span {
    margin-top: 50px;
  }
`;

export default StyledFooter;
