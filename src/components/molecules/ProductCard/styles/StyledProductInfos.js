import styled from 'styled-components'; //css
import {defaultTheme, typeScale} from '../../../../themes';

const StyledProductInfos = styled.div`
  z-index: 3;
  display: grid;
  grid-template-columns: 70% 30%;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  .product_description {
    display: flex;
    margin: 15px 0 0 15px;
    flex-direction: column;
    text-align: left;
    align-self: start;
  }
  p {
    white-space: pre-wrap;
  }
  .product_price {
    display: flex;
    height: 100%;
    padding: 0 15px 15px 0;
    font-family: ${defaultTheme.secondaryFont};
    font-size: ${typeScale.header3};
    font-weight: bold;
    color: ${defaultTheme.textPrimaryColor};
    justify-content: flex-end;

    span {
      align-self: flex-end;
    }
  }
`;
export default StyledProductInfos;
