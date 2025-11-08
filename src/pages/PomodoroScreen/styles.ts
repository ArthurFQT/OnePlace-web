import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
    height: 80vh;
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
  color: ${(props) => props.theme.colors.gray[100]};

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme.colors.primary.dark};
  color: ${(props) => props.theme.colors.gray[100]};
  transition: color 0.3s ease;

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors.primary.main};
  }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme.colors.error.dark};
  color: ${(props) => props.theme.colors.gray[100]};
  transition: color 0.3s ease;

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors.error.main};
  }
`;
