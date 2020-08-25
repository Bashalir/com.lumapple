import styled from 'styled-components';
import {defaultTheme} from '../../../../styles';

const StyledHeader = styled.header`
  display: grid;
  width: 100%;
  background-color: ${defaultTheme.backgroundInvertedColor};
  justify-items: center;
  align-items: center;
  div:nth-child(1) {
    max-width: ${defaultTheme.maxWidth};
  }
`;

export default StyledHeader;
