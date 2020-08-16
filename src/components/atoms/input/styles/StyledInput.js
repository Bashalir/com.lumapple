import styled from 'styled-components'; //css
import {defaultTheme, shadowInMixin} from '../../../../styles';

const StyledInput = styled.div`
  display: flex;
  min-height: 45px;
  color: ${({textColor}) => textColor};
  border: 0px;
  border-radius: 2em;

  width: ${({width}) => width};
  height: ${({height}) => height};

  ${shadowInMixin}

  input {
    color: ${({textColor}) => textColor};
    width: 100%;
    border: none;
    background: none;
    padding-inline-end: 15px;
    padding-inline-start: 15px;
  }
`;

export default StyledInput;
