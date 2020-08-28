import styled, {css} from 'styled-components';
import {
  defaultTheme,
  resetPositionMixin,
  shadowMixin,
  shadowInMixin,
} from '../../../../themes';

import StyledLabel from './StyledLabel';

const StyledButton = styled.button`
  ${({disabled}) => (disabled ? isDisabled : isEnabled)}
`;

const isDisabled = css`
  border-radius: 3em;
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
`;

const isEnabled = css`
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
  cursor: pointer;
  border: 0px;
  border-radius: 3em;
  font-family: ${defaultTheme.primaryFont};
  background: ${props => props.backgroundColor};
  color: ${props =>
    props.isInverted ? defaultTheme.textColorInverted : defaultTheme.textColor};

  padding: 10px 20px;
  position: relative;
  outline: 0;

  ${({borderColor}) =>
    borderColor
      ? borderStatus
      : css`
          border: 0px;
        `}

  ::before {
    ${resetPositionMixin}
    z-index: 1;
    opacity: 1;
    content: '';
    border-radius: 3em;
    ${shadowMixin}
    transition: opacity 750ms;
  }
  ::after {
    z-index: -1;
    content: '';
    ${resetPositionMixin}
    opacity: 0;
    border-radius: 3em;
    ${shadowInMixin}
    transition: opacity 750ms;
  }
  :hover {
    ::before {
      opacity: 0;
    }
    ::after {
      opacity: 1;
    }
  }
  :active {
    transform: scale(0.98);
  }
`;

const borderStatus = css`
  border: 3px solid;
  border-color: ${({borderColor}) => borderColor};

  ${StyledLabel} {
    color: ${({borderColor}) => borderColor};
  }
`;

export default StyledButton;
