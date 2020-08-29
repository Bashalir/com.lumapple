import styled from 'styled-components';
import StyledCard from '../../../atoms/card/styles/StyledCard';
import {defaultTheme, typeScale} from '../../../../themes';
import StyledInput from '../../../atoms/input/styles/StyledInput';

const StyledSignUp = styled.div`
  display: grid;
  align-content: center;
  height: 100%;

  ${StyledCard} {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 100%;
    padding: 10px;

    ${StyledInput} {
      margin: 10px;
    }

    form {
      span {
        font-size: ${typeScale.helper};
      }
      margin: 20px;
      padding: 20px;
      width: 100%;

      p {
        font-size: ${defaultTheme.typeScale.helper};
        margin: 20px;
        color: ${defaultTheme.statusErrorColor};
      }

      button {
        margin: 0 auto;
        height: 45px;
        width: calc(100% - 15px);
      }
    }

    h3 {
      margin: 35px 0 20px 0;
    }

    p {
      margin-bottom: 20px;
      a {
        color: ${defaultTheme.textPrimaryColor};
      }
    }
  }

  @media (min-width: ${defaultTheme.breakpoint}) {
    ${StyledCard} {
      width: 456px;
      min-height: 656px;
      max-height: 830px;
    }
  }
`;

export default StyledSignUp;
