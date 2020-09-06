import styled from 'styled-components';
import {defaultTheme} from '../../../../themes';

const StyledMain = styled.section`
  display: grid;
  justify-items: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  padding: 0px;
  background-color: ${defaultTheme.backgroundDefaultColor};

  /* 50px header 60px footer 40px margin-top + margin-bottom */
  min-height: calc(100vh - (50px + 60px + 40px));
  max-height: 100%;

  @media (min-width: ${defaultTheme.breakpoint}) {
    div:nth-child(1) {
      max-width: ${defaultTheme.maxWidth};
    }
  }
`;

export default StyledMain;
