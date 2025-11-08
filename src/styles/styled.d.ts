import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        light: string;
        main: string;
        dark: string;
        contrast: string;
      };
      secondary: {
        light: string;
        main: string;
        dark: string;
        contrast: string;
      };
      success: {
        light: string;
        main: string;
        dark: string;
        contrast: string;
      };
      warning: {
        light: string;
        main: string;
        dark: string;
        contrast: string;
      };
      error: {
        light: string;
        main: string;
        dark: string;
        contrast: string;
      };
      info: {
        light: string;
        main: string;
        dark: string;
        contrast: string;
      };
      gray: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      background: {
        default: string;
        paper: string;
        elevated: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
      };
      divider: string;
      border: string;
      header: {
        background: string;
        text: string;
      };
      footer: {
        background: string;
        text: string;
      };
      sidebar: {
        background: string;
        text: string;
        hover: string;
      };
      card: {
        background: string;
        hover: string;
      };
    };
    typography: {
      fontFamily: {
        primary: string;
        secondary: string;
        mono: string;
      };
      fontSize: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
      };
      fontWeight: {
        light: number;
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
      };
      lineHeight: {
        tight: number;
        normal: number;
        relaxed: number;
      };
    };
    spacing: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      8: string;
      10: string;
      12: string;
      16: string;
    };
    borderRadius: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      full: string;
    };
    shadows: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
    };
    transitions: {
      duration: {
        fast: string;
        normal: string;
        slow: string;
      };
      timing: {
        ease: string;
        linear: string;
        easeIn: string;
        easeOut: string;
        easeInOut: string;
      };
    };
    zIndex: {
      negative: number;
      0: number;
      10: number;
      20: number;
      30: number;
      40: number;
      50: number;
      modal: number;
      tooltip: number;
    };
  }
}
