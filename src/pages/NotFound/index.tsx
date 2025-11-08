import React from "react";
import { useNavigate } from "react-router-dom";
import {
  NotFoundContainer,
  ErrorCode,
  ErrorMessage,
  ErrorDescription,
  BackButton,
} from "./styles";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>Página não encontrada</ErrorMessage>
      <ErrorDescription>
        Desculpe, a página que você está procurando não existe ou foi movida.
        Por favor, verifique o endereço digitado ou retorne à página anterior.
      </ErrorDescription>
      <BackButton onClick={handleGoBack}>Voltar à página anterior</BackButton>
    </NotFoundContainer>
  );
};

export default NotFound;
