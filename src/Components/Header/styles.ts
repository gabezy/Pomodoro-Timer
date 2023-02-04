import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 8px;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${({ theme }) => theme["gray-100"]};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: all 0.1s;
      &.active {
        color: ${({ theme }) => theme["green-500"]};
      }
      &:hover {
        border-bottom-color: ${({ theme }) => theme["green-500"]};
      }
    }
  }
`;
