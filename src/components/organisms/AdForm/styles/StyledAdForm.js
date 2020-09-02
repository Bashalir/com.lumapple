import styled from 'styled-components';

import {defaultTheme} from '../../../../themes';
import StyledCard from '../../../atoms/card/styles/StyledCard';

const StyledAdForm = styled.div`
  h4 {
    color: ${defaultTheme.textColor};
  }

  ${StyledCard} {
    width: auto;
    height: auto;
    padding: 20px;
  }
`;

export default StyledAdForm;
