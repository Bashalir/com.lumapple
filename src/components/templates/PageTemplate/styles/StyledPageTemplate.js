import styled from 'styled-components';

import {defaultTheme} from '../../../../themes';

const StyledPageTemplate = styled.div`
  display: grid;

  grid-template-rows: 60px 100% 86px;
  grid-template-columns: 100%;
  justify-content: center;

  background-color: ${defaultTheme.backgroundDefaultColor};
`;

export default StyledPageTemplate;
