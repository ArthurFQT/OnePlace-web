import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #666;
  margin-right: 30px;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const ProfileInfo = styled.div``;

const Name = styled.h1`
  font-size: 2rem;
  margin-bottom: 8px;
  color: #333;
`;

const Email = styled.p`
  color: #666;
  margin-bottom: 8px;
`;

const Role = styled.p`
  color: #0066cc;
  font-weight: 500;
`;

const Section = styled.section`
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0052a3;
  }
`;

const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <Avatar>JD</Avatar>
        <ProfileInfo>
          <Name>João Silva</Name>
          <Email>joao.silva@exemplo.com</Email>
          <Role>Gerente de Projetos</Role>
        </ProfileInfo>
      </ProfileHeader>
      
      <Section>
        <SectionTitle>Informações Pessoais</SectionTitle>
        <FormGroup>
          <Label htmlFor="name">Nome</Label>
          <Input type="text" id="name" defaultValue="João Silva" />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" defaultValue="joao.silva@exemplo.com" />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="phone">Telefone</Label>
          <Input type="tel" id="phone" defaultValue="(11) 98765-4321" />
        </FormGroup>
        
        <Button>Salvar Alterações</Button>
      </Section>
      
      <Section>
        <SectionTitle>Segurança</SectionTitle>
        <FormGroup>
          <Label htmlFor="current-password">Senha Atual</Label>
          <Input type="password" id="current-password" />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="new-password">Nova Senha</Label>
          <Input type="password" id="new-password" />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
          <Input type="password" id="confirm-password" />
        </FormGroup>
        
        <Button>Atualizar Senha</Button>
      </Section>
    </ProfileContainer>
  );
};

export default Profile;