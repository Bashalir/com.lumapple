import styled from 'styled-components';
import StyledCard from '../../../atoms/card/styles/StyledCard';
import {defaultTheme, typeScale} from '../../../../themes';
import StyledInput from '../../../atoms/input/styles/StyledInput';

const StyledSignUp = styled.div`
  ${StyledCard} {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 10px;

    ${StyledInput} {
      margin: 10px;
    }

    form {
      margin: 20px;
    }
    h3 {
      margin: 35px 0 20px 0;
    }

    span {
      font-size: ${typeScale.helper};
    }
  }

  @media (min-width: ${defaultTheme.breakpoint}) {
    ${StyledCard} {
      width: 456px;
      height: 530px;
    }
  }
`;

export default StyledSignUp;
