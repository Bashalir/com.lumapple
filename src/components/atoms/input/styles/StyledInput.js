import styled, {css} from 'styled-components'; //css
import {defaultTheme, shadowInMixin} from '../../../../themes';

const StyledInput = styled.div`
  background-color: ${defaultTheme.backgroundDefaultColor};
  display: flex;
  min-height: 45px;
  color: ${({textColor}) => textColor};
  border: 0px;
  border-radius: 2em;
  padding-inline-end: 15px;
  padding-inline-start: 15px;

  height: ${({height}) => height};

  border: none;

  :focus-within {
    border: 1px solid;
    border-color: ${defaultTheme.statusFocusColor};
  }
  ${shadowInMixin}

  input {
    width: ${({width}) => width};
    font-family: ${defaultTheme.primaryFont};
    color: ${({textColor}) => textColor};
    border: none;
    background: none;
  }

  ${({error}) =>
    error
      ? statusError
      : css`
          border: none;
        `}
`;

const statusError = css`
  border: 1px solid;
  border-color: ${defaultTheme.statusErrorColor};
  :focus-within {
    border-color: ${defaultTheme.statusErrorColor};
  }
`;

export default StyledInput;
