import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 825px) {
    justify-content: center;
  }
`;
