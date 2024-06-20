import styled from "styled-components";
import { BaseInput } from "../../styles";

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
