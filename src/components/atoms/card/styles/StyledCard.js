import styled from 'styled-components'; //css
import {
  defaultTheme,
  resetPositionMixin,
  shadowMixin,
  shadowInMixin,
} from '../../../../styles';

const StyledCard = styled.div`
  text-align: center;
  color: ${({textColor}) => textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0px;
  border-radius: 1em;
  width: ${props => props.width};
  height: ${props => props.height};
  position: relative;
  outline: 0;

  ::before {
    ${resetPositionMixin}
    z-index: 1;
    opacity: 1;
    content: '';
    border-radius: 1em;
    ${shadowMixin}
    transition: opacity 750ms;
  }
  ::after {
    z-index: -1;
    content: '';
    ${resetPositionMixin}
    opacity: 0;
    border-radius: 1em;
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
`;

export default StyledCard;
