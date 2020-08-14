import styled from 'styled-components'; //css
import {defaultTheme} from '../../../../styles';

const StyledLabel = styled.span`
  z-index: 1;
  position: relative;
  content: ${props => props.name};
  color: ${props => props.textColor};
  font-family: ${defaultTheme.primaryFont};
`;

export default StyledLabel;
