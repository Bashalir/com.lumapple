import styled from 'styled-components';

import {defaultTheme} from '../../../../themes';
import StyledProductCard from '../../../molecules/ProductCard/styles/StyledProductCard';

const StyledAdList = styled.div`
  width: 100%;
  ${StyledProductCard} {
    margin: 20px;
  }
`;

export default StyledAdList;
