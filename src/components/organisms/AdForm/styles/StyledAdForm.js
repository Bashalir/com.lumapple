import styled, {css} from 'styled-components';

import {defaultTheme} from '../../../../themes';
import StyledCard from '../../../atoms/card/styles/StyledCard';
import StyledCategoryCard from '../../../molecules/CategoryCard/styles/StyledCategoryCard';
import StyledButton from '../../../atoms/button/styles/StyledButton';

const StyledAdForm = styled.div`
  width: 100%;

  h4 {
    color: ${defaultTheme.textColor};
  }

  .ad-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 20px;
  }

  .card-button {
    input {
      opacity: 0;
    }
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

    ${StyledButton} {
      margin: 20px;
    }

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
  .feature {
    display: flex;
    flex-flow: column;
    text-align: left;
    margin-bottom: 20px;

    span {
      margin-bottom: 5px;
    }
  }

  form {
    button {
      margin: 0 auto;
      height: 45px;
    }
    p {
      font-size: ${defaultTheme.typeScale.helper};
      margin: 20px;
      color: ${defaultTheme.statusErrorColor};
    }
  }

  ${StyledCard} {
    label {
      span {
        min-height: 32px;
      }
    }
  }

  @media (min-width: ${defaultTheme.breakpoint}) {
    .ad-list {
      display: flexbox;
      row-gap: 20px;
      justify-content: center;
    }

    .container-card {
      margin: 0 20px;
    }
  }
`;

export default StyledAdForm;
