import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#4d8bf0', // Azul mais claro para contraste
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#e0e0e0',
    dark: '#1e2130', // Cinza/azul escuro
    background: '#0D1117', // Preto claro
    backgroundSecondary: '#1e2130', // Cinza/azul escuro para cards
    text: '#e0e0e0', // Texto claro para contraste
    textSecondary: '#a0a0a0', // Texto secundário
    border: '#2d3748', // Bordas mais escuras
    cardBackground: '#1e2130', // Fundo para cards
    headerBackground: '#0f111a', // Fundo para o header
    footerBackground: '#0f111a', // Fundo para o footer
  },
  fonts: {
    body: "'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    heading: "'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '2rem',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    wide: '1200px',
  },
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;