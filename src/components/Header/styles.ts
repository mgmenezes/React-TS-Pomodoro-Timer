import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 1rem;
    a {
      align-items: center;
      justify-content: center;
      display: flex;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid #ae66a9;
      }

      &:active {
        color: ${(props) => props.theme["purple-400"]};
      }
    }
  }
`;
