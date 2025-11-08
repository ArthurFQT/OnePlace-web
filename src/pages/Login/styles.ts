import styled from "styled-components";
export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background.default};
  padding: ${(props) => props.theme.spacing[4]};
`;

export const LoginCard = styled.div`
  background-color: ${(props) => props.theme.colors.background.paper};
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => props.theme.shadows.lg};
  padding: ${(props) => props.theme.spacing[8]};
  width: 100%;
  max-width: 400px;
`;

export const Logo = styled.h1`
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing[6]};
  color: ${(props) => props.theme.colors.primary.main};
  font-family: ${(props) => props.theme.typography.fontFamily.secondary};
  font-size: ${(props) => props.theme.typography.fontSize["3xl"]};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing[4]};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing[2]};
`;

export const Label = styled.label`
  display: block;
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.typography.fontSize.sm};
  font-weight: ${(props) => props.theme.typography.fontWeight.medium};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${(props) => `${props.theme.spacing[3]} ${props.theme.spacing[4]}`};
  background-color: ${(props) => props.theme.colors.background.elevated};
  color: ${(props) => props.theme.colors.text.primary};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-size: ${(props) => props.theme.typography.fontSize.md};
  transition: all ${(props) => props.theme.transitions.duration.fast}
    ${(props) => props.theme.transitions.timing.easeInOut};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary.main};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary.light}40;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.text.hint};
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.colors.primary.contrast};
  padding: ${(props) => `${props.theme.spacing[3]} ${props.theme.spacing[4]}`};
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-size: ${(props) => props.theme.typography.fontSize.md};
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
  transition: all ${(props) => props.theme.transitions.duration.normal}
    ${(props) => props.theme.transitions.timing.easeInOut};
  margin-top: ${(props) => props.theme.spacing[4]};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary.dark};
    transform: translateY(-1px);
    box-shadow: ${(props) => props.theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${(props) => props.theme.shadows.sm};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.gray[400]};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.error.main};
  margin-top: ${(props) => props.theme.spacing[4]};
  text-align: center;
  font-size: ${(props) => props.theme.typography.fontSize.sm};
  padding: ${(props) => props.theme.spacing[2]};
  background-color: ${(props) => props.theme.colors.error.light}20;
  border-radius: ${(props) => props.theme.borderRadius.md};
`;