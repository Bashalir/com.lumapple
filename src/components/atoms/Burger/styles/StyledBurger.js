import styled from 'styled-components';

const StyledBurger = styled.div`
  display: none;
  width: 45px;
  height: 45px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export default StyledBurger;
