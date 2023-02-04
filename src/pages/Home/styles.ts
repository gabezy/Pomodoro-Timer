import styled from "styled-components";

export const HomeContainer = styled.main`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
  }
`;

const BaseCountdownButton = styled.button`
  width: 100%;
  color: ${({ theme }) => theme["gray-100"]};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  font-weight: bold;
  border: 0;
  border-radius: 8px;
  transition: all 0.1s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme["green-500"]};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme["green-700"]};
  }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme["red-500"]};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme["red-700"]};
  }
`;
