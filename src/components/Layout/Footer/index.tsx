import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.footerBackground};
  padding: 1.5rem 2rem;
  text-align: center;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <Copyright>© {currentYear} OnePlace. Todos os direitos reservados.</Copyright>
    </FooterContainer>
  );
};

export default Footer;