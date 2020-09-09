import styled from 'styled-components';
import StyledCard from '../../../atoms/card/styles/StyledCard';
import StyledButton from '../../../atoms/button/styles/StyledButton';
import {defaultTheme} from '../../../../themes/themes';

const StyledHelloAdForm = styled.div`
  ${StyledCard} {
    width: auto;
    height: auto;
    padding: 20px;
    h3 {
      margin-bottom: 20px;
    }

    .connection {
      display: grid;
      justify-items: center;

      ${StyledButton} {
        margin: 10px;
      }
    }

    @media (min-width: ${defaultTheme.breakpoint}) {
      .connection {
        display: inline-flex;
        margin-top: 20px;
        ${StyledButton} {
          margin: 20px;
        }
      }
    }
  }
`;

export default StyledHelloAdForm;
