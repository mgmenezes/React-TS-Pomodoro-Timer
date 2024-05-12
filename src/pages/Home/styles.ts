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

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(colors) => colors.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`;

export const CountDownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  display: flex;
  color: ${(colors) => colors.theme["gray-100"]};
  gap: 1rem;
  span {
    background: ${(colors) => colors.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Divider = styled.div`
  display: flex;
  padding: 1rem 0;
  color: ${(colors) => colors.theme["green-500"]};

  justify-content: center;
  width: 4rem;
  overflow: hidden;
`;
