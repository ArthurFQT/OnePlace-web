import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.typography.fontFamily.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.colors.background.default};
    color: ${(props) => props.theme.colors.text.primary};
    line-height: ${(props) => props.theme.typography.lineHeight.normal};
    transition: all ${(props) => props.theme.transitions.duration.normal} ${(
  props
) => props.theme.transitions.timing.ease};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.typography.fontFamily.secondary};
    color: ${(props) => props.theme.colors.text.primary};
    line-height: ${(props) => props.theme.typography.lineHeight.tight};
    margin-bottom: ${(props) => props.theme.spacing[4]};
  }

  p {
    margin-bottom: ${(props) => props.theme.spacing[3]};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary.main};
    transition: color ${(props) => props.theme.transitions.duration.fast} ${(
  props
) => props.theme.transitions.timing.ease};

    &:hover {
      color: ${(props) => props.theme.colors.primary.light};
    }
  }

  button {
    cursor: pointer;
    font-family: ${(props) => props.theme.typography.fontFamily.primary};
    border: none;
    border-radius: ${(props) => props.theme.borderRadius.md};
    transition: all ${(props) => props.theme.transitions.duration.fast} ${(
  props
) => props.theme.transitions.timing.ease};

    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }

  input, textarea, select {
    font-family: ${(props) => props.theme.typography.fontFamily.primary};
    font-size: ${(props) => props.theme.typography.fontSize.md};
    background-color: ${(props) => props.theme.colors.background.paper};
    color: ${(props) => props.theme.colors.text.primary};
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: ${(props) => props.theme.borderRadius.md};
    padding: ${(props) => props.theme.spacing[2]} ${(props) =>
  props.theme.spacing[3]};
    transition: all ${(props) => props.theme.transitions.duration.fast} ${(
  props
) => props.theme.transitions.timing.ease};

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.colors.primary.main};
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary.light}40;
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.text.hint};
    }

    &:disabled {
      background-color: ${(props) => props.theme.colors.gray[100]};
      color: ${(props) => props.theme.colors.text.disabled};
      cursor: not-allowed;
    }
  }

  code {
    font-family: ${(props) => props.theme.typography.fontFamily.mono};
    background-color: ${(props) => props.theme.colors.background.elevated};
    padding: ${(props) =>
      `${props.theme.spacing[1]} ${props.theme.spacing[2]}`};
    border-radius: ${(props) => props.theme.borderRadius.sm};
    font-size: ${(props) => props.theme.typography.fontSize.sm};
  }
`;

export default GlobalStyles;
