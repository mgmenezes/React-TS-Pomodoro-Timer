import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;
export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  background: ${(colors) => colors.theme["green-500"]};
  color: ${(colors) => colors.theme["gray-100"]};

  &:not(:disabled):hover {
    background: ${(colors) => colors.theme["green-300"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(colors) => colors.theme["green-500"]};
  color: ${(colors) => colors.theme["gray-100"]};

  &:not(:disabled):hover {
    background: ${(colors) => colors.theme["green-700"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(colors) => colors.theme["red-500"]};
  color: ${(colors) => colors.theme["gray-100"]};

  &:not(:disabled):hover {
    background: ${(colors) => colors.theme["red-700"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(colors) => colors.theme["gray-500"]};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(colors) => colors.theme["gray-100"]};
  &::placeholder {
    color: ${(colors) => colors.theme["gray-500"]};
  }
  &:focus {
    border-bottom-color: ${(colors) => colors.theme["green-500"]};
    box-shadow: none;
  }
`;
