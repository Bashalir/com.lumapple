import styled from 'styled-components';

import {defaultTheme} from '../../../../themes';
import StyledProductCard from '../../../molecules/ProductCard/styles/StyledProductCard';

const StyledAdPage = styled.div`
  width: 100%;
  ${StyledProductCard} {
    margin-bottom: 20px;
  }
`;

export default StyledAdPage;
