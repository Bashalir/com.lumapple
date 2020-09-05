import styled from 'styled-components'; //css
import {defaultTheme} from '../../../../themes';
import StyledCard from '../../../atoms/card/styles/StyledCard';
import StyledProductPhoto from './StyledProductPhoto';
import StyledProductInfos from './StyledProductInfos';

const StyledProductCard = styled.div`
  height: 120px;
  width: 100%;
  :active {
    z-index: 1;
    ${StyledProductInfos},
    img {
      transform: scale(0.995);
    }
  }

  ${StyledCard} {
    height: 120px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: flex-start;
    cursor: pointer;

    :before {
      background-color: transparent;
      ${StyledProductPhoto} {
        z-index: 1;
      }
    }
    :hover {
      ::after {
        z-index: 2;
        background-color: transparent;
      }
      ${StyledProductPhoto} {
        z-index: 1;
      }
    }
  }

  @media (min-width: ${defaultTheme.minWidth}) {
    ${StyledCard} {
      height: 200px;
    }
    ${StyledProductPhoto} {
      width: 200px;
      height: 200px;
    }
    img {
      max-height: 200px;
      max-width: 200px;
    }
  }
`;

export default StyledProductCard;
