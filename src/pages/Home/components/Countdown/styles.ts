import styled from "styled-components";

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
