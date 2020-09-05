import styled from 'styled-components';

import {defaultTheme} from '../../../../themes';
import StyledCard from '../../../atoms/card/styles/StyledCard';
import StyledCategoryCard from '../../../molecules/CategoryCard/styles/StyledCategoryCard';

const StyledAdForm = styled.div`
  h4 {
    color: ${defaultTheme.textColor};
  }

  input {
    opacity: 0;
  }
  .ad-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 20px;
  }

  .card-button {
    :hover {
      ${StyledCard} {
        ::before {
          opacity: 0;
        }
        ::after {
          opacity: 1;
        }
      }
    }
  }
  .container-card {
    width: auto;
    height: auto;
    padding: 20px;
    margin-bottom: 20px;

    h4 {
      margin: 20px;
    }
    input[type='radio']:checked + label {
      figure {
        ${StyledCard} {
          ::before {
            opacity: 0;
          }
          ::after {
            opacity: 1;
          }
        }
      }
      span {
        color: ${defaultTheme.textPrimaryColor};
      }
    }
  }

  ${StyledCard} {
    span {
      min-height: 32px;
    }
  }
`;

export default StyledAdForm;
