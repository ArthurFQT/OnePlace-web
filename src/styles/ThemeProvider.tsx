import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = {
  colors: {
    // Cores principais
    primary: {
      light: "#7C9EF5",
      main: "#4D8BF0",
      dark: "#2B68C9",
      contrast: "#FFFFFF",
    },
    secondary: {
      light: "#8592A3",
      main: "#6C757D",
      dark: "#495057",
      contrast: "#FFFFFF",
    },

    // Estados
    success: {
      light: "#4CAF50",
      main: "#28A745",
      dark: "#1B7E31",
      contrast: "#FFFFFF",
    },
    warning: {
      light: "#FFD54F",
      main: "#FFC107",
      dark: "#FFA000",
      contrast: "#000000",
    },
    error: {
      light: "#EF5350",
      main: "#DC3545",
      dark: "#C62828",
      contrast: "#FFFFFF",
    },
    info: {
      light: "#29B6F6",
      main: "#17A2B8",
      dark: "#0288D1",
      contrast: "#FFFFFF",
    },

    // Tons de cinza
    gray: {
      50: "#F8F9FA",
      100: "#E9ECEF",
      200: "#DEE2E6",
      300: "#CED4DA",
      400: "#ADB5BD",
      500: "#6C757D",
      600: "#495057",
      700: "#343A40",
      800: "#212529",
      900: "#121214",
    },

    // Interface
    background: {
      default: "#121214",
      paper: "#1E2130",
      elevated: "#29292E",
    },
    text: {
      primary: "#E1E1E6",
      secondary: "#A0A0A0",
      disabled: "#6C757D",
      hint: "#8D8D99",
    },
    divider: "#2D3748",
    border: "#323238",

    // Elementos específicos
    header: {
      background: "#0F111A",
      text: "#E1E1E6",
    },
    footer: {
      background: "#0F111A",
      text: "#E1E1E6",
    },
    sidebar: {
      background: "#1E2130",
      text: "#E1E1E6",
      hover: "#29292E",
    },
    card: {
      background: "#1E2130",
      hover: "#29292E",
    },
  },

  typography: {
    fontFamily: {
      primary: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
      secondary: "'Poppins', 'Roboto', sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', monospace",
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      md: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  spacing: {
    0: "0",
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "0.75rem", // 12px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    8: "2rem", // 32px
    10: "2.5rem", // 40px
    12: "3rem", // 48px
    16: "4rem", // 64px
  },

  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    md: "0.25rem", // 4px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    full: "9999px",
  },

  shadows: {
    none: "none",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },

  breakpoints: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  transitions: {
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "450ms",
    },
    timing: {
      ease: "ease",
      linear: "linear",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
    },
  },

  zIndex: {
    negative: -1,
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    modal: 999,
    tooltip: 1000,
  },
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
