import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  margin-top: 70px; // Altura do header fixo

  @media (max-width: 768px) {
    margin-top: 60px; // Altura do header fixo em mobile
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}


function ScrollToTop() {
   const { pathname } = useLocation();

   useEffect(() => {
     window.scrollTo(0, 0);
   }, [pathname]);

   return null;
 }
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <ScrollToTop />
      <Header />
      <MainContent>{children}</MainContent>
      {/* <Footer /> */}
    </LayoutContainer>
  );
};

export default Layout;
