import styled from "styled-components";

export const CountdownContainer = styled.div`
  font-family: ${(props) => props.theme.typography.fontFamily.mono};
  font-size: 9rem;
  line-height: 7rem;
  color: ${(props) => props.theme.colors.text.primary};
  display: flex;
  gap: ${(props) => props.theme.spacing[4]};
  margin-bottom: ${(props) => props.theme.spacing[6]};

  span {
    background: ${(props) => props.theme.colors.background.elevated};
    padding: ${(props) => props.theme.spacing[8]}
      ${(props) => props.theme.spacing[4]};
    border-radius: ${(props) => props.theme.borderRadius.lg};
    box-shadow: ${(props) => props.theme.shadows.md};
    min-width: 8rem;
    text-align: center;
  }
`;

export const Separator = styled.div`
  padding: ${(props) => props.theme.spacing[6]} 0;
  color: ${(props) => props.theme.colors.primary.main};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
`;

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: ${(props) => props.theme.spacing[4]};
  border-radius: ${(props) => props.theme.borderRadius.lg};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${(props) => props.theme.spacing[2]};
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
  font-size: ${(props) => props.theme.typography.fontSize.md};

  cursor: pointer;
  transition: all ${(props) => props.theme.transitions.duration.normal}
    ${(props) => props.theme.transitions.timing.easeInOut};
  background: transparent;
  color: ${(props) => props.theme.colors.text.primary};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary.light}40;
  }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme.colors.success.main};
  color: ${(props) => props.theme.colors.success.contrast};

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors.success.dark};
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.md};
  }

  &:not(:disabled):active {
    transform: translateY(0);
    box-shadow: ${(props) => props.theme.shadows.sm};
  }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme.colors.error.main};
  color: ${(props) => props.theme.colors.error.contrast};

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors.error.dark};
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.md};
  }

  &:not(:disabled):active {
    transform: translateY(0);
    box-shadow: ${(props) => props.theme.shadows.sm};
  }
`;
