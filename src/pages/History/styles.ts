import styled, { keyframes } from "styled-components";

const fade = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.gray[100]};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme.colors.gray[600]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme.colors.gray[100]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme.colors.gray[700]};
      border-top: 4px solid ${(props) => props.theme.colors.gray[800]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

const STATUS_COLORS = {
  yellow: { group: "warning", shade: "main" },
  green: { group: "success", shade: "main" },
  red: { group: "error", shade: "main" },
} as const;


interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;

    background: ${({ theme, statusColor }) =>
      theme.colors[STATUS_COLORS[statusColor].group][
        STATUS_COLORS[statusColor].shade
      ]};
  }
`;


export const PaginationContainer = styled.footer`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: ${fade} 0.25s ease-in-out;
`;

export const PaginationButton = styled.button`
  border: 0;
  background: ${(props) => props.theme.colors.gray[700]};
  color: ${(props) => props.theme.colors.gray[100]};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors.gray[600]};
  }
`;

export const PaginationNumber = styled(PaginationButton)<{ active?: boolean }>`
  width: 2rem;
  height: 2rem;
  font-size: 0.875rem;
  background: ${(props) =>
    props.active
      ? props.theme.colors.primary.main
      : props.theme.colors.gray[700]};

  &:not(:disabled):hover {
    background: ${(props) =>
      props.active
        ? props.theme.colors.primary.dark
        : props.theme.colors.gray[600]};
  }
`;

export const PaginationInfo = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray[300]};
`;
