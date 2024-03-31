import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${(colors) => colors.theme["gray-100"]};
  }
`;
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    min-width: 600px;
    th {
      text-align: left;
      font-weight: 400;
      font-size: 1.125rem;
      color: ${(colors) => colors.theme["gray-100"]};
      background: ${(colors) => colors.theme["gray-600"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 0.5rem;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 0.5rem;
        padding-right: 1.5rem;
      }
    }
    td {
      padding: 1rem;
      border-top: 4px solid ${(colors) => colors.theme["gray-800"]};
      border-bottom: 1px solid ${(colors) => colors.theme["gray-700"]};
      background-color: ${(colors) => colors.theme["gray-700"]};
      line-height: 1.6;
      &:first-child {
        width: 40%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

const STATUS_COLORS = {
  green: "green-500",
  red: "red-500",
  yellow: "yellow-500",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(colors) => colors.theme[STATUS_COLORS[colors.statusColor]]};
  }
`;
