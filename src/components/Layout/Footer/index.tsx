import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterLink,
  FooterText,
  FooterBottom,
  SocialLinks,
  SocialLink,
} from "./styles";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>OnePlace</FooterTitle>
          <FooterText>
            Sua plataforma completa para gerenciar tudo em um só lugar. Organize
            seus projetos, tarefas e documentos com facilidade.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Links Úteis</FooterTitle>
          <FooterLink href="/sobre">Sobre nós</FooterLink>
          <FooterLink href="/recursos">Recursos</FooterLink>
          <FooterLink href="/precos">Preços</FooterLink>
          <FooterLink href="/blog">Blog</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Suporte</FooterTitle>
          <FooterLink href="/ajuda">Central de Ajuda</FooterLink>
          <FooterLink href="/contato">Contato</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>
          <FooterLink href="/status">Status do Sistema</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Legal</FooterTitle>
          <FooterLink href="/termos">Termos de Uso</FooterLink>
          <FooterLink href="/privacidade">Política de Privacidade</FooterLink>
          <FooterLink href="/cookies">Política de Cookies</FooterLink>
          <FooterLink href="/compliance">Compliance</FooterLink>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <FooterText>
          © {currentYear} OnePlace. Todos os direitos reservados.
        </FooterText>
        <SocialLinks>
          <SocialLink
            href="https://twitter.com/oneplace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </SocialLink>
          <SocialLink
            href="https://facebook.com/oneplace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </SocialLink>
          <SocialLink
            href="https://instagram.com/oneplace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/company/oneplace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </SocialLink>
        </SocialLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
