import { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import { theme } from '../src/index';
import { GlobalStyle } from '../src';

const StorybookGlobalStyle = createGlobalStyle`
  ${() => css`
    @import url('https://rsms.me/inter/inter.css');
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');

    #root {
      height: 100vh;
    }
  `}
`;

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <StorybookGlobalStyle />
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
