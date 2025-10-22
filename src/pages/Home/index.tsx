import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.div`
  background-color: ${props => props.theme.colors.backgroundSecondary};
  border-radius: 8px;
  padding: 40px;
  margin-bottom: 40px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: ${props => props.theme.colors.text};
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 24px;
`;

const Button = styled(Link)`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background-color: #3a78d8;
  }
`;

const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const FeatureCard = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: ${props => props.theme.colors.text};
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.5;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Hero>
        <Title>Bem-vindo ao OnePlace</Title>
        <Subtitle>Sua plataforma completa para gerenciar tudo em um só lugar</Subtitle>
        <Button to="/dashboard">Começar agora</Button>
      </Hero>
      
      <FeaturesSection>
        <FeatureCard>
          <FeatureTitle>Organização</FeatureTitle>
          <FeatureDescription>
            Mantenha todos os seus projetos, tarefas e documentos organizados em um único local.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle>Colaboração</FeatureTitle>
          <FeatureDescription>
            Trabalhe em equipe de forma eficiente com ferramentas de colaboração em tempo real.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle>Produtividade</FeatureTitle>
          <FeatureDescription>
            Aumente sua produtividade com recursos avançados de gerenciamento de tempo.
          </FeatureDescription>
        </FeatureCard>
      </FeaturesSection>
    </HomeContainer>
  );
};

export default Home;