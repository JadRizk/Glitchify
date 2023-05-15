import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@glitchify/ui';
import { ScanLines } from '../src/components/ScanLines';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gl!tch#fy</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ScanLines />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
