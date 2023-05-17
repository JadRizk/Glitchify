import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@glitchify/ui';
import { ScanLines } from '../src/components/ScanLines';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { getMainPageLayout } from '../src/components/layout/AppLayout';

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const getLayout =
    router.pathname !== '/' ? getMainPageLayout : (page: ReactElement) => page;

  //Todo: Refactor
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <>
      <Head>
        <title>Jad M. Rizk</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isProduction && <ScanLines />}
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
