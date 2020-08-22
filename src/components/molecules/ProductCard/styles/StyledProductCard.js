import styled from 'styled-components'; //css
import {defaultTheme, typeScale} from '../../../../styles';
import StyledCard from '../../../atoms/card/styles/StyledCard';

const StyledProductCard = styled.div`
  :active {
    .product_infos,
    img {
      transform: scale(0.98);
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
      .product_photo {
        z-index: 1;
      }
    }
    :hover {
      ::after {
        background-color: transparent;
      }
      .product_photo {
        z-index: -1;
      }
    }
  }

  .product_photo {
    display: flex;
    align-content: center;
    width: 120px;
    height: 120px;
    background-color: white;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
  }
  img {
    display: block;
    max-height: 120px;
    max-width: 120px;
    width: auto;
    height: auto;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
  }
  .product_infos {
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }
  .product_description {
    display: flex;
    margin: 15px;
    flex-direction: column;
    text-align: left;
  }
  p {
    white-space: pre-wrap;
  }
  .product_price {
    padding: 15px;
    font-family: ${defaultTheme.secondaryFont};
    font-size: ${typeScale.header3};
    font-weight: bold;
    color: ${defaultTheme.textPrimaryColor};
    text-align: right;
  }

  @media (min-width: ${defaultTheme.minWidth}) {
    ${StyledCard} {
      height: 200px;
    }
    .product_photo {
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
