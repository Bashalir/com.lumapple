import styled from 'styled-components'; //css
import {defaultTheme, typeScale} from '../../../../styles';

const StyledProductInfos = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;

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
`;
export default StyledProductInfos;
