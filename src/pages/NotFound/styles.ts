import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  padding: ${(props) => props.theme.spacing[8]};
  text-align: center;
`;

export const ErrorCode = styled.h1`
  font-size: ${(props) => props.theme.typography.fontSize["3xl"]};
  color: ${(props) => props.theme.colors.primary.main};
  margin-bottom: ${(props) => props.theme.spacing[4]};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  font-family: ${(props) => props.theme.typography.fontFamily.secondary};
`;

export const ErrorMessage = styled.h2`
  font-size: ${(props) => props.theme.typography.fontSize.xl};
  color: ${(props) => props.theme.colors.text.primary};
  margin-bottom: ${(props) => props.theme.spacing[6]};
  font-weight: ${(props) => props.theme.typography.fontWeight.medium};
`;

export const ErrorDescription = styled.p`
  font-size: ${(props) => props.theme.typography.fontSize.md};
  color: ${(props) => props.theme.colors.text.secondary};
  margin-bottom: ${(props) => props.theme.spacing[8]};
  max-width: 600px;
  line-height: ${(props) => props.theme.typography.lineHeight.relaxed};
`;

export const BackButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.colors.primary.contrast};
  padding: ${(props) => `${props.theme.spacing[3]} ${props.theme.spacing[6]}`};
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-size: ${(props) => props.theme.typography.fontSize.md};
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
  border: none;
  cursor: pointer;
  transition: all ${(props) => props.theme.transitions.duration.normal}
    ${(props) => props.theme.transitions.timing.easeInOut};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary.dark};
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${(props) => props.theme.shadows.sm};
  }
`;
