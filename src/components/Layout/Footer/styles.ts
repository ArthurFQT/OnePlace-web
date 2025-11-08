import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.footer.background};
  padding: ${(props) => props.theme.spacing[6]};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.footer.text};
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${(props) => props.theme.spacing[8]};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing[4]};
`;

export const FooterTitle = styled.h4`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.typography.fontSize.lg};
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
  margin-bottom: ${(props) => props.theme.spacing[3]};
`;

export const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.text.secondary};
  text-decoration: none;
  font-size: ${(props) => props.theme.typography.fontSize.sm};
  transition: color ${(props) => props.theme.transitions.duration.fast}
    ${(props) => props.theme.transitions.timing.easeInOut};

  &:hover {
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

export const FooterText = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: ${(props) => props.theme.typography.fontSize.sm};
  line-height: ${(props) => props.theme.typography.lineHeight.relaxed};
`;

export const FooterBottom = styled.div`
  margin-top: ${(props) => props.theme.spacing[8]};
  padding-top: ${(props) => props.theme.spacing[4]};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.theme.spacing[4]};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing[4]};
`;

export const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: ${(props) => props.theme.typography.fontSize.lg};
  transition: all ${(props) => props.theme.transitions.duration.fast}
    ${(props) => props.theme.transitions.timing.easeInOut};

  &:hover {
    color: ${(props) => props.theme.colors.primary.main};
    transform: translateY(-2px);
  }
`;
