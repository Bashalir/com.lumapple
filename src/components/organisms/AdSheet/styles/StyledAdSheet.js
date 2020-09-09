import styled from 'styled-components';

import {defaultTheme} from '../../../../themes';
import StyledProductCard from '../../../molecules/ProductCard/styles/StyledProductCard';
import StyledCard from '../../../atoms/card/styles/StyledCard';
import {typeScale} from '../../../../themes/typography';
import CategoryCard from '../../../molecules/CategoryCard/CategoryCard';
import ModelCard from '../../../molecules/ModelCard/ModelCard';
import StyledModelCard from '../../../molecules/ModelCard/style/StyledModelCard';
import StyledCategoryCard from '../../../molecules/CategoryCard/styles/StyledCategoryCard';

const StyledAdSheet = styled.div`
  width: 100%;
 padding:20px;

  .adsheet {
    width: 100%;
    height: auto;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    justify-items: center;
    justify-content: center;

    &_photo {
      height: 250px;
    }

    &_price {
      display: flex;
      height: 100%;
      margin-top: 20px;
      padding: 0 15px 15px 0;
      font-family: ${defaultTheme.secondaryFont};
      font-size: ${typeScale.header1};
      font-weight: bold;
      color: ${defaultTheme.textPrimaryColor};
      justify-content: flex-end;

      span {
        align-self: flex-end;
      }
    }

    &_descriptions {
      display: flex;
      margin: 30px;
      h4 {
        margin-bottom: 10px;
      }
      flex-flow: column wrap;
      justify-content: flex-start;

      li {
        margin: 2px;
        text-align: left;
      }
    }

    &_options {
      display: grid;
      cursor: default;
      margin: 20px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      gap: 20px 20px;
      justify-items: center;
      justify-content: center;
      ${StyledCategoryCard},${StyledModelCard} {
        cursor: default;
      }
    }
  }
  &_photo {
    height: 250px;
  }
  @media (min-width: ${defaultTheme.breakpoint}) {
    padding-right:60px;
    .adsheet {
      grid-template-columns: 1fr 1fr;
      margin: 20px;
      padding: 20px;
    }
  }
`;

export default StyledAdSheet;
