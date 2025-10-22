import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const DashboardHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
`;

const Subtitle = styled.p`
  color: ${props => props.theme.colors.textSecondary};
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.colors.text};
`;

const CardValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

const RecentActivitySection = styled.section`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const ActivityList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ActivityItem = styled.li`
  padding: 0.75rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
`;

const ActivityTitle = styled.div`
  font-weight: 500;
  margin-bottom: 4px;
  color: ${props => props.theme.colors.text};
`;

const ActivityTime = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textSecondary};
`;

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <DashboardHeader>
        <Title>Dashboard</Title>
        <Subtitle>Bem-vindo de volta! Aqui está um resumo das suas atividades.</Subtitle>
      </DashboardHeader>
      
      <CardGrid>
        <Card>
          <CardTitle>Projetos Ativos</CardTitle>
          <CardValue>12</CardValue>
        </Card>
        
        <Card>
          <CardTitle>Tarefas Pendentes</CardTitle>
          <CardValue>24</CardValue>
        </Card>
        
        <Card>
          <CardTitle>Concluídas Hoje</CardTitle>
          <CardValue>7</CardValue>
        </Card>
        
        <Card>
          <CardTitle>Colaboradores</CardTitle>
          <CardValue>5</CardValue>
        </Card>
      </CardGrid>
      
      <RecentActivitySection>
        <SectionTitle>Atividades Recentes</SectionTitle>
        <ActivityList>
          <ActivityItem>
            <ActivityTitle>Projeto "Marketing Digital" atualizado</ActivityTitle>
            <ActivityTime>Hoje, 14:30</ActivityTime>
          </ActivityItem>
          <ActivityItem>
            <ActivityTitle>Nova tarefa adicionada em "Desenvolvimento Web"</ActivityTitle>
            <ActivityTime>Hoje, 11:15</ActivityTime>
          </ActivityItem>
          <ActivityItem>
            <ActivityTitle>Reunião agendada com a equipe de design</ActivityTitle>
            <ActivityTime>Ontem, 18:00</ActivityTime>
          </ActivityItem>
          <ActivityItem>
            <ActivityTitle>Documento "Estratégia Q3" compartilhado</ActivityTitle>
            <ActivityTime>Ontem, 10:45</ActivityTime>
          </ActivityItem>
          <ActivityItem>
            <ActivityTitle>Projeto "App Mobile" concluído</ActivityTitle>
            <ActivityTime>2 dias atrás</ActivityTime>
          </ActivityItem>
        </ActivityList>
      </RecentActivitySection>
    </DashboardContainer>
  );
};

export default Dashboard;